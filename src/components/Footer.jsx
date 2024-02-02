import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid estilo-footer">
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 text-center ">

                        <p>
                            <a href={"https://www.facebook.com/Codespaceacademy/"} target="_blank" rel="noreferrer"><img src={"images/SM-RRSS-04.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com/codespaceacademy/"} target="_blank" rel="noreferrer"><img src={"images/SM-RRSS-03.png"} alt="Instagram" width={24} /></a>
                            <a href={"https://twitter.com/codespaceacade"} target="_blank" rel="noreferrer"><img src={"images/SM-RRSS-01.png"} alt="Twitter" width={24} /></a>
                            <a href={"https://www.youtube.com/channel/UCShIfwOX_JfziVBJoSM6zMQ"} target="_blank" rel="noreferrer"><img src={"images/SM-RRSS-02.png"} alt="Youtube" width={24} /></a>
                        </p>

                    </div>

                    < div className="col-md-12 text-center ">
                        <p>
                            <img src={"images/Logo-blanco.png"} alt={"Logo Code Space"} width={150} />
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;