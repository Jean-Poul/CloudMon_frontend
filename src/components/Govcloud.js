import GovCloud from '../images/GovCloud_E_D.png'

const Govcloud = () => {

    return (
        <div className="font-link" style={{width: '100%', marginLeft: '180px', overflowY: 'auto'}}>
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