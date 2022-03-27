import Particles from "react-tsparticles";
import { BoxContainer, CardContainer, H1Container, MainContainer } from "./Dashboard.page.styles";
const DashboardPage = () => {

    const particlesConfig = {
        particles: {
            options: { fullscreen: { enable: false, zIndex: 0 } },
            color: {
                value: "#f1faee",
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true
                }
            },
            lineLinked: {
                blink: false,
                color: "random",
                consent: false,
                distance: 35,
                enable: true,
                opacity: 0.3,
                width: 0.5
            },
            move: {
                attract: {
                    enable: false,
                    rotate: {
                        x: 600,
                        y: 1200
                    }
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 0.4,
                straight: false
            },
            number: {
                density: {
                    enable: false,
                    area: 3000
                },
                limit: 0,
                value: 400
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 2,
                    sync: false
                },
                random: false,
                value: 1
            },
            shape: {
                type: "circle"
            },
            size: {
                animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 50,
                    sync: false
                },
                random: true,
                value: 1
            }
        },
        polygon: {
            draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 0.05
            },
            move: {
                radius: 10
            },
            inlineArrangement: "equidistant",
            scale: 1,
            type: "inline",
            url: "https://particles.js.org/images/smalldeer.svg"
        }
    };
    ;



    return (
        <MainContainer>
            <Particles params={particlesConfig}
            />

            {/* <H1Container className="text-center">Pedidos</H1Container> */}
            {/* <div className="grid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <CardContainer className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title text-center">Cliente</h5>
                                <p className="card-text">Tipo de pedido</p>
                                <p className="card-text">cantidad</p>
                                <p className="card-text">telefono</p>
                                <p className="card-text">fecha</p>
                                <p className="card-text">Pagado/Pendiente de Pagar</p>
                                <p className="card-text">Entregado/Pendiente</p>
                            </div>
                        </CardContainer>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <CardContainer className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title text-center">Cliente</h5>
                                <p className="card-text">Tipo de pedido</p>
                                <p className="card-text">cantidad</p>
                                <p className="card-text">telefono</p>
                                <p className="card-text">fecha</p>
                                <p className="card-text">Pagado/Pendiente de Pagar</p>
                                <p className="card-text">Entregado/Pendiente</p>
                            </div>
                        </CardContainer>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <CardContainer className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title text-center">Cliente</h5>
                                <p className="card-text">Tipo de pedido</p>
                                <p className="card-text">cantidad</p>
                                <p className="card-text">telefono</p>
                                <p className="card-text">fecha</p>
                                <p className="card-text">Pagado/Pendiente de Pagar</p>
                                <p className="card-text">Entregado/Pendiente</p>
                            </div>
                        </CardContainer>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <CardContainer className="card m-4">
                            <div className="card-body">
                                <h5 className="card-title text-center">Cliente</h5>
                                <p className="card-text">Tipo de pedido</p>
                                <p className="card-text">cantidad</p>
                                <p className="card-text">telefono</p>
                                <p className="card-text">fecha</p>
                                <p className="card-text">Pagado/Pendiente de Pagar</p>
                                <p className="card-text">Entregado/Pendiente</p>
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div> */}
        </MainContainer>
    );
}

export default DashboardPage;