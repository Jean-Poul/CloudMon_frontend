import GovCloud from '../images/GovCloud_E_D.png'

const Govcloud = () => {

    return (
        <div className="font-link" style={{ position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)' }}>
            <div className="textMove">
            <h1>
                Govclouds Infrastruktur
            </h1>
            <br/>
            <img class="infraImg" src={GovCloud} alt="GovCloud" />
        </div>
        </div>

    )

}

export default Govcloud;