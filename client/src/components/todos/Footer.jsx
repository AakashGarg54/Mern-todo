import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-light my-3 py-3" style={footerStyle}>
            <p className="text-center">Copyright &copy; Todolist.com</p>
        </footer>
    )
}

export default Footer

let footerStyle = {
    position: 'relative',
    top: "5vh",
    width: "100%",
}