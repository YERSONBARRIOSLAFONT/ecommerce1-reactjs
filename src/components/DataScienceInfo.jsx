import React from "react";

const DataScienceInfo = () => {
    return (
        <div className="container-fluid ">
        <div className="row alineacion-dataScience">
            <div className="col-md-6 text-center ">
                <img src={"images/3169210-738x738.jpg"} alt={"Data Science"} width={500}/>
            </div>

            <div className="col-md-6 text-center ">
                <h2>Nueva Formación en Data Science</h2>
                <h3>Especialízate en Datos y conviertéte en un Data Scientist</h3>
                <p>¿Quiéres ser un Data Sciencist? Con este curso de Data Science aprenderás a analizar datos, crear proyectos de Data Analytics, construir modelos de Machine Learning que ayuden a la toma de decisiones para solucionar problemas reales de forma predictiva.
                    Para saber qué es un Data Scientist y cuáles son sus funciones, lee este artículo
                </p>
                <h3>¡Plazas Limitadas! Comenzamos en enero</h3>
                <button type="button" className="btn btn-success">Más información</button>
            </div>
        </div>
        </div>
    )
}

export default DataScienceInfo;
