import React from "react";


const QuieresTrabajar = () => (
  <div className="flex flex-col bg-black text-grey-lightest mt-0 pt-16 pb-16 text-center">
    <div className="mx-auto">
      <h3 className="font-medium px-4 pb-3">¿Quieres trabajar con nosotros?</h3>
      <hr />
      <p className="text-grey-lightest pt-3">Revisa los cargos que tenemos disponibles y únete a la startup que está revolucionando la forma de ahorrar en Latam.</p>
      <a href="/unete-equipo"><button className="rounded-lg shadow-md bg-green hover:bg-green-dark no-underline font-medium text-white p-3 mt-12">Revisar cargos</button></a>
    </div>
  </div >
)

export default QuieresTrabajar;