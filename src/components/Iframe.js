import React from "react"

function Mapa() {

    return (
        <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.833454241011!2d-59.799523024293244!3d-34.17617553504498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bbd82c8c1453b5%3A0x9c8ee019828c11f9!2sArist%C3%B3bulo%20del%20Valle%2071%2C%20Cap.%20Sarmiento%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1702647442154!5m2!1ses-419!2sar"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" />
    )
}

export default Mapa