document.addEventListener('DOMContentLoaded', function() {
    VANTA.WAVES({
        el: "#vanta",    // El ID del contenedor donde se aplicará el efecto
        mouseControls: true,    // Activar controles del mouse
        touchControls: true,    // Activar controles táctiles
        gyroControls: false,    // Desactivar controles giroscópicos
        minHeight: 200.00,      // Altura mínima del área
        minWidth: 200.00,       // Ancho mínimo del área
        scale: 1.00,            // Escala del efecto
        scaleMobile: 1.00,      // Escala del efecto en dispositivos móviles
        color: 0x0B3948           // Color del efecto (en formato hexadecimal)
    });
});

