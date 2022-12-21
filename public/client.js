document.addEventListener('readystatechange', (event) => {
    if (document.readyState === 'interactive' && typeof(navigator.globalPrivacyControl) !== 'undefined') {
        const gpcStatus = document.getElementById('dom-signal-status')
        const gpcValue = document.getElementById('gpc-dom-value')
        const domSvgPath = document.getElementById('dom-thumbs-up')

        if (navigator.globalPrivacyControl) {
          domSvgPath.style.fill = "rgb(0, 212, 255)"
        }

        gpcValue.innerHTML = navigator.globalPrivacyControl
        gpcStatus.classList.remove('dom-signal-missing')
    }
})

fetch("/.well-known/gpc.json")
  .then(response => response.json())
  .then(json => {
    const wellKnownWrapper = document.getElementById('well-known-code')
    const wellKnownCode = JSON.stringify(json, null, 2)
    wellKnownWrapper.innerHTML = wellKnownCode
    Prism.highlightElement(wellKnownWrapper)
})