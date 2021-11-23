import GovCloud from '../images/GovCloud-512x512.png'

const Velkommen = () => {

    return (
        <div className="pagesMove">
            <img src={GovCloud} alt="GovCloud" />
            <h2>
                Velkommen til CloudMon
            </h2>
            En monitoreringsside til overvågning af kubernetes cluster
        </div>
    )

}

export default Velkommen;