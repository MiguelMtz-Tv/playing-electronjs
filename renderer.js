const information = document.getElementById('info')
const mainInfo = document.getElementById('main')

mainInfo.innerText = `Hola, esta aplicación está siendo construida en Electron JS (v${versions.electron()})`  
information.innerText = `Esta aplicación está usando: Chrome (${versions.chrome()}), Node(${versions.node()})`