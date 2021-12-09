import GovCloud from '../images/GovCloud-512x512.png'

const Velkommen = () => {

    return (
        <div className="pagesMove">
            <div>
                <img src={GovCloud} alt="GovCloud" width="312" height="312" />
                <h2>
                    Velkommen til CloudMon
                </h2>
                En monitoreringsside til overvågning af kubernetes cluster
            </div>
        </div>
    )

}

export default Velkommen;