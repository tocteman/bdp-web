import React from "react";
import Link from "gatsby-link";
import Header from "../components/Header";

const LegalPage = ({ data }) => (
  <div className="max-w-xs xs:max-w-sm sm:max-w-md mx-auto leading-normal py-16 px-6">
    <h2>Términos y Condiciones de Uso del Servicio: <br /> Meta BdP</h2>

    <h4 className="pt-4">Alcance</h4>
    <p className="py-2">Los Términos y Condiciones de Uso de ÜBANK en adelante “Términos”, se encargan de establecer el Alcance de los servicios ofrecidos por la Empresa a través de ÜBANK.  El CLIENTE deberá declarar que ha leído y acepta los presentes Términos al momento de registrarse en la APP que se encuentran a disposición del CLIENTE; adicionalmente dichos términos y condiciones se encuentran en el sitio web de https://metabdp.ubankapp.com. Adicionalmente EL CLIENTE, acepta que EL BANCO y ÜBANK podrán actualizar en cualquier momento los presentes términos y condiciones mientras dure el presente servicio (proyecto piloto). Dicha actualización constará publicada en la web antes indicada. </p>

    <p className="py-2">Los Términos y Condiciones regulan los servicios que Millennial Fintech Services Chile SpA, con domicilio en Carlos Antúnez N° 1843, B22, depto. 607, comuna de Providencia, Región Metropolitana (en adelante, indistintamente, la “Empresa”), presta a través de la aplicación ÜBANK (en adelante, la “Aplicación” o “APP”), al CLIENTE.</p>

    <p className="py-2">
      Con el objeto de ordenar el Alcance de la prestación del servicio, a continuación, se regulan:</p>
      <ul>
        <li>Descripción del servicio y definiciones</li>
        <li>Acceso y Apertura de Cuenta</li>
        <li>Secreto Bancario</li>
        <li>Datos</li>
        <li>Propiedad Intelectual e industrial</li>
        <li>Mandato para los movimientos de dinero</li>
        <li>Limitación de Responsabilidad de la Empresa</li>
        <li>Garantía sobre la aplicación</li>
        <li>Adaptaciones o nuevas versiones de la Aplicación</li>
        <li>Vigencia y Terminación del Contrato</li>
        <li>Modificación de los Términos y Condiciones</li>
        <li>Fuerza mayor</li>
        <li>Comunicaciones</li>
        <li>Ley aplicable y arbitraje</li>
        </ul>
    
    
  <h4 className="pt-4">Descripción del Servicio y Definiciones</h4>
    <p className="py-2"><strong>Descripción del Servicio.</strong> ÜBANK es una herramienta de finanzas personales desarrollada por la Empresa, que le permite a las personas ahorrar de forma automático usando metas y reglas. En concreto, ÜBANK es una aplicación que ayuda a las personas a mover dinero desde su cuenta bancaria, a través de “Reglas de Ahorro Automáticas”, el cual será acreditado en la cuenta de ahorro del cliente (cuenta destino), conforme condiciones consentidas por el CLIENTE para que luego se gatille el “Ahorro Automático” cada vez que el CLIENTE realice una acción definida por la regla. De esta forma, los clientes pueden crear Metas de Ahorro, donde definen un objetivo, el monto deseado por ahorrar por proyecto y el plazo en el que quieren alcanzar dicho objetivo y, por otra parte, consienten Reglas de Ahorro Automático para automatizar los movimientos de fondos entre sus cuentas con el fin de cumplir con los objetivos de cada Meta de Ahorro. Las Reglas de Ahorro Automático serán pausadas automáticamente por ÜBANK si es que el saldo disponible en la cuenta de origen del CLIENTE es menor a <strong>USD 0.00.</strong></p>
    <p className="py-2">Una vez logrado el ahorrar el monto en dinero definido para un Meta de Ahorro particular, se entiende que existe una Meta Completado deteniéndose el Ahorro Automático contenido en las Reglas de Ahorro Automático.  Una vez ocurrido lo anterior, de forma simultánea, Übank creará una nueva meta, activará las reglas antes usadas en el nuevo proyecto y notificará mediante correo al usuario de este evento. El usuario podrá modificar y pausar las reglas, activar otras reglas y editar o eliminar el proyecto creado según sus preferencias.</p>
    <p className="py-2">Para poder recibir el servicio de ÜBANK, el CLIENTE debe conectar su cuenta bancaria usando sus credenciales de acceso a su cuenta online para que ÜBANK pueda acceder a su cuenta bancaria, leer movimientos bancarios, saldos en la cuenta bancaria y hacer movimientos de fondos desde la cuenta corriente o de ahorro a su cuenta de ahorros. Esta información es usada para analizar sus egresos e ingresos en la cuenta, categorizar sus transacciones, hacer análisis de gastos, hacer seguimiento a las reglas de ahorro, accionar el Ahorro Automático y cualquier acción que ÜBANK requiera para poder ofrecer su servicio de forma correcta y segura. </p>
    <p className="py-2">La aplicación acumulará los valores que deberá debitar producto del cumplimiento de las reglas creadas por el cliente, y dicho valor acumulados será transferido todos los días durante la madrugada del día siguiente por medio de un proceso batch realizado por ÜBANK, siempre y cuando exista saldo en la cuenta bancaria (cuenta origen) del cliente.</p>
    <p className="py-2">La Empresa no es un Banco o Institución Financiera por lo que es este último quien dispone productos de Ahorro para que a través del “Ahorro Automático” sus Afiliados ahorren o inviertan. Es ÜBANK el que realiza los movimientos de Ahorro Automático mandatado por el CLIENTE, respecto del cuanto y cuando mover los fondos desde la cuenta bancaria del cliente a la cuenta de ahorro del mismo cliente, conforme las Reglas de Ahorro Automático creadas por él.</p>
    <p className="py-2">La aplicación no proporciona asesoramiento financiero, de inversión, legal o tributario, ni interviene a ningún efecto en las relaciones contractuales entre el Banco y sus Afiliados (CLIENTES de la Empresa) a los que pertenezcan las cuentas agregadas, entendiéndose jamás prestado algún servicio de esta naturaleza o similar. </p>

    <h5>Definiciones</h5>
    <p className="py-2">Para todos los efectos derivados de la utilización de la aplicación, se entenderá por:</p>
    <ol>
      <li>Ahorro automático: la acción consistente en trasladar fondos desde la cuenta bancaria del CLIENTE a otra cuenta de ahorros del mismo cliente (cuenta destino) el ahorro meta siguiendo la regla de ahorro automático definida y consentida por el CLIENTE. </li>
      <li>Cuenta origen: Cuenta bancaria del cliente desde la cual se realizan los débitos automáticos de los montos autorizados para el “Ahorro Automático”.</li>
      <li>Cuenta de ahorro (cuenta destino): Cuenta de ahorros del mismo cliente desde la cual se realizan los créditos automáticos de los montos autorizados para el “Ahorro Automático”. </li>
      <li>Búsqueda de transacciones: El campo de búsqueda disponible en la pantalla de transacciones que permite la revisión histórica únicamente de las transacciones realizadas a través de la app, según monto, fecha, grupo o subgrupo, o descripción, sea la realizada por el Banco o por edición de descripción de transacciones. Al hacer una búsqueda con estos parámetros, la aplicación mostrará, en caso de existir, el número de transacciones realizadas a través de la app y monto total egresado o ingresado por cada mes, según los parámetros definidos en la búsqueda.</li>
      <li>Categorización automática de transacciones: la categorización algorítmica y anónima de las transacciones que realiza el CLIENTE en su cuenta bancaria, dividiéndolas en distintos grupos o subgrupos, a fin de mostrar a través de objetivos visuales y/o gráficos los gastos y topes de ingreso a fin de ejecutar acciones de ahorro y conocimiento de finanzas personales. El algoritmo ha sido desarrollado por la Empresa, pudiendo contener errores de predicción. La Empresa no se hace responsable de las acciones tomadas por un CLIENTE en caso de error de categorización. </li>
      <li>Categorización manual de transacciones: la edición, sea priorizando, postergando o agregando uno o más grupos o subgrupos de transacciones de aquellas creadas mediante la categorización automática de transacciones. La categorización manual de transacciones permite incorporar nueva información al algoritmo de categorización automática y así mejorar las predicciones que realiza. </li>
      <li>CLIENTE: La persona natural que acepta suscribe los presentes términos y condiciones para el uso de la aplicación en conexión con sus cuentas bancarias.</li>
      <li>Conectar cuenta bancaria: el traspaso de información de credenciales bancarias básicas, tales como, número de cédula, código validación (one time password) remitido por el Banco al CLIENTE,  para su uso exclusivo en la Aplicación, a fin de otorgar acceso a la lectura de transacciones y saldos desde los seis meses anteriores a la fecha que EL CLIENTE se ha registrado y por mientras se encuentre vigente el presente servicio, como también para la ejecución de las reglas de ahorro automático. </li>
      <li>Integración con Apple Health Kit: regla de ahorro automático definida por una actividad física contenida en la aplicación Apple Health Kit -disponible sólo para clientes con dispositivos iOS- que permite leer los datos contenidos en ella para ejecutarse. </li>
      <li>Integración con ESPN: regla de ahorro automático que utiliza los resultados de los partidos de futbol de los equipos seleccionados por el Cliente para generar los ahorros automáticos.</li>
      <li>Metas de ahorro: las metas de dinero en un plazo determinado que fije el CLIENTE, que pueden ser creados, modificados o eliminados de la aplicación, dentro de los límites que la Empresa estime pertinentes. </li>
      <li>Meta Completada: Momento en que el CLIENTE ha logrado ahorrar el monto en dinero definido para una Meta de Ahorro particular, deteniéndose las reglas de ahorro respecto del mismo.</li>
      <li>Reglas de ahorro automático: las Condiciones definidas y consentidas por el CLIENTE sobre la base de algoritmos previamente dispuestos por la Aplicación y que tienen como fin el accionar el Ahorro Automático cada vez que el CLIENTE realice una acción definida por la regla. Estas reglas se pueden activar, editar, pausar o eliminar desde la Aplicación cuando el CLIENTE lo desee. Las reglas de ahorro automática cuentan con plazos de inicio y finalización de cada proyecto de ahorro siendo la fecha de inicio la definida por EL CLIENTE.</li>
      <li>Total ahorrado: suma de las cifras dinerarias aportadas a través de la utilización de las reglas de ahorro automático y las transferencias realizadas dentro de la Aplicación, considerando los fondos trasladados desde la cuenta bancaria del CLIENTE a otra cuenta bancaria del cliente. </li>
    </ol>
      <h4 className="pt-4">Acceso a Cuentas Bancarias</h4>
      <p className="py-2">ÜBANK será únicamente accesible para aquellos CLIENTES con dos Cuentas bancaria propias, no de terceros, que se encuentren activas en el Banco. </p>
      <p className="py-2">El Acceso se efectúa únicamente por medios electrónicos y remotos, comprometiéndose el CLIENTE a ingresar a su Cuenta bancaria mediante su correo electrónico o usuario y contraseña. </p>
      <p className="py-2">Queda estrictamente prohibido el Acceso a la aplicación o sus contenidos usando robots, deep links, scrappers u otros medios tecnológicos de automatización de captura de información. El CLIENTE será responsable por cualquier daño resultante de la instalación de virus informáticos o demás eventos que perjudiquen el normal funcionamiento de la aplicación.</p>
      <p className="py-2">Para la activación del servicio de ÜBANK, el Usuario debe contar con dos (corrientes o de ahorros) vigente en el Banco y aceptar los presentes Términos y Condiciones.</p>
      <p className="py-2">Para activar el servicio de ÜBANK el Usuario deberá proporcionar una dirección correo electrónico válida y una contraseña. </p>
      <p className="py-2">El servicio de ÜBANK (proyecto piloto) tendrá el plazo que estipulen el Banco y ÜBANK, pudiendo terminarse por alguna de las causales señaladas más adelante en este instrumento, terminación que será notificada al cliente a través del correo electrónico registrado.</p>

      <h4 className="pt-4">DEL SIGILO Y RESERVA DE INFORMACIÓN </h4>
      <p className="py-2">En virtud de lo dispuesto por el CODIGO ORGANICO MONETARIO Y FINANCIERO, los datos de carácter personal de los clientes del sistema financiero ecuatoriano están protegidos, y solo podrán ser entregados a su titular o a quien éste autorice. Ninguna persona natural o jurídica que llegase a tener conocimiento de información sometida a sigilo o reserva podrá divulgarla en todo o en parte. El incumplimiento de esta disposición será sancionado por el antedicho Código, sin perjuicio de la responsabilidad penal respectiva.</p>
      <p className="py-2">La Empresa, no siendo institución financiera, ni regulada por la Superintendencia, desde un punto de vista jurídico ni de hecho, igualmente suscribe como parte de sus obligaciones para con sus Clientes, el más irrestricto apego al SIGILO Y RESERVA (secreto bancario) establecido en dicha norma legal.</p>
      
      <h4 className="pt-4">DE LOS DATOS </h4>
      <p className="py-2">La Empresa, no siendo institución financiera, desde un punto de vista jurídico ni de hecho, igualmente suscribe como parte de sus obligaciones para con sus Clientes, el más irrestricto apego al tratamiento de Datos de los mismos.</p>
      <p className="py-2">La Empresa al no ser una institución financiera, queda excluida de aquellas obligaciones que digan relación con deberes sobre el manejo y/o administración de datos que sean absolutamente incompatibles con dicha condición.</p>
      <p className="py-2">La recolección de los datos que se realiza mediante la Aplicación tiene por objeto su normal funcionamiento, y sólo  se aplicará a usos relacionados con esta finalidad.</p>
    <p className="py-2">La Aplicación mantiene las comunicaciones entre los dispositivos de los Clientes y sus servidores en un entorno seguro (HTTPS) mediante el protocolo SSL, conforme los requerimientos del Banco.</p>
    <p className="py-2">Las credenciales de acceso de los Clientes a su entidad financiera son almacenadas y encriptadas en base de datos y entornos independientes a las de las transacciones, evitando en todo momento vincular a un CLIENTE con sus movimientos financieros.</p>
    <p className="py-2">El CLIENTE acepta, por este instrumento, que sus datos puedan ser alojados en servidores de terceros de forma encriptada, quienes en todo caso deberán guardar las mismas responsabilidades en lo tocante a la no transmisión de los datos personales del CLIENTE y de seguridad, contando con certificaciones de cumplimiento de estándares en seguridad, seguridad física de las instalaciones, copias de seguridad, seguridad de las instancias donde se alojan los servidores, seguridad de la red, seguridad de los servicios de almacenamiento, manteniendo test de intrusión y auditorías internas y externas, habiendo obtenido los certificados de seguridad con Verisign adhiriéndose a la resolución de conflictos y buenas prácticas de comercio electrónico con Confianza on-line.</p>
    <p className="py-2">La Empresa podrá, con todo, efectuar la agregación de los datos relacionados con cada cuenta individual, manteniendo la anonimidad y reserva de los datos personales, para sus usos propios y siempre respetando la normativa mencionada.</p>

    <h4 className="pt-4">Propiedad Intelectual e industrial</h4>
    <p className="py-2">El CLIENTE no tendrá derecho alguno sobre los derechos de propiedad intelectual e industrial de ÜBANK y de sus distintas actualizaciones. </p>
    <p className="py-2">El CLIENTE una vez una vez creada su cuenta ÜBANK se obliga con la Empresa, a que en todo momento:</p>
    <ol>
      <li>utilizará la APP de conformidad a los presentes Términos y Condiciones</li>
      <li>Será la única persona con acceso a la Aplicación con el fin de evitar manipulación por personas no autorizadas o inexpertas;</li>
      <li>Dispondrá de cualquier otra medida preventiva de razonable Aplicación.</li>
      <li>Cumplir con la legislación vigente en lo que se refiere al origen de los fondos en su cuenta corriente  y ahorro.</li>
    </ol>
    <p className="py-2">La Empresa jamás responderá por el mal uso de la APP por parte del CLIENTE o de cualquier ilegalidad que se cometa mediante la utilización de la misma.</p>
    <p className="py-2">La Empresa tiene derecho sobre los logos, marcas, diseños, distintivos, etiquetas, patentes y look and feel de la Aplicación y el CLIENTE no podrá hacer un uso privado diverso del estrictamente necesario para la utilización de la Aplicación.</p>

    <h4 className="pt-4">Mandato para los movimientos de dinero y acceso a la información. </h4>
    <p className="py-2">El CLIENTE desde el momento que crea su cuenta aceptando los presentes Términos y Condiciones, autoriza a la Empresa para que esta última efectúe a través de la APP los movimientos ingresados por el CLIENTE y a su nombre y en su representación; además lo autoriza a conocer las cuentas registradas para el presente servicio y sus movimientos, desde la fecha de registro en la APP hasta la fecha de finalización de este servicio (proyecto piloto). Adicionalmente EL CLIENTE conoce que EL BANCO proporcionará información respecto de los movimientos de la cuenta bancaria (cuenta origen) para efectos de aplicación de las Reglas de Ahorro Automático configurada por EL CLIENTE.</p>
    <p className="py-2">Dicho mandato tiene como presupuesto únicamente la definición previa realizada por el CLIENTE respecto del “cuanto” se deberán destinar fondos del CLIENTE para el ahorro programado en la otra cuenta bancaria declarada por el Cliente en el Banco. </p>
    <p className="py-2">Todo esto, como se señaló, ya habrá sido previamente consentido por el CLIENTE mediante la configuración del mismo de su/s Proyecto/s de Ahorro y Reglas de Ahorro Automático.</p>
    <p className="py-2">Una vez concluido el presente servicio, ÜBANK se obliga a eliminar, borrar y destruir, sin excepción, toda información que ha recibido por parte del Banco o por parte del CLIENTE y que ha sido almacenada en sus servidores, nubes y equipos de LA EMPRESA, no pudiendo en ningún caso almacenar información que no haya sido autorizada por el Banco o por el Cliente.</p>

  <h4 className="pt-4">Limitación de Responsabilidad de la Empresa</h4>
    <p className="py-2">La responsabilidad de la Empresa en relación con las obligaciones asumidas en virtud de la aceptación de los presentes Términos estará sujeta a las limitaciones ya expuestas y a las siguientes limitaciones.</p>
    <p className="py-2">En ningún caso podrá el CLIENTE reclamar de la Empresa indemnización alguna por daños o perjuicios que puedan ser calificados como daño emergente, lucro cesante, pérdida de negocios, o reclamaciones de terceros contra el CLIENTE, entre otros, en virtud de defectos, interrupción o fallas la APP derivadas por causas que estén fuera de control de ÜBANK, y que a modo ejemplar, pero no taxativo se enumeran a continuación: </p>
    <ol>
      <li>en los elementos de interconexión; así como</li>
      <li>en los equipos y terminales del CLIENTE.</li>
      <li>Ataques de hackeo o hackers.</li>
      <li>Fallas en las redes de telecomunicaciones.</li>
      <li>Fallas de terceros servidores; entre otros.</li>
      <li>Caso fortuito o fuerza mayor</li>
    </ol>
    <p className="py-2">El CLIENTE es el único responsable por la toma de decisión sobre las Reglas de Ahorro, mediante el uso ÜBANK, y de los efectos que ello genere en su disponibilidad de fondos. La Empresa jamás responderá por el origen o legalidad de los fondos que dispone el CLIENTE en su cuenta bancaria y que sean utilizados para los fines de ahorro de conformidad a los presentes Términos y Condiciones. El CLIENTE se compromete a mantener en secreto sus contraseñas y la Empresa jamás responderá por el mal uso de la/s misma/s.</p>
    <p className="py-2">La Empresa se encarga únicamente de facilitar el movimiento de fondos mediante la APP y no de la selección o recomendación de productos de ahorro o inversión, por lo que no se hace responsable ante posibles pérdidas o costos asociados por inversiones. ÜBANK no es un producto financiero y la Empresa no es un Banco o institución financiera. </p>
    
    <h4 className="pt-4">Garantía sobre la Aplicación</h4>
    <p className="py-2">En particular, el CLIENTE acepta que la Aplicación se suministra "tal y como se presenta" ("as it is").
    Con la aceptación de los presentes Términos y Condiciones, la Empresa se compromete a entregar un servicio confidencial y a respetar los Proyectos de Ahorro de sus CLIENTES de conformidad a las Reglas de Ahorro Automático consentidas por el CLIENTE dando irrestricto cumplimiento a la normativa legal y teniendo en consideración las distintas exoneraciones de responsabilidad para la Empresa establecidas en los presentes Términos y Condiciones. 
    La APP ÜBANK entregará soporte online al CLIENTE para el correcto uso de la misma. </p>

    <h4 className="pt-4">Adaptaciones o nuevas versiones de la aplicación</h4>
    <p className="py-2">La APP se actualizará las veces que fuere necesario para el correcto desempeño y mejoramiento de la misma. El CLIENTE mediante la aceptación de los presentes Términos y Condiciones acepta el que se hagan las actualizaciones que fueren necesarias. </p>

    <h4 className="pt-4">Vigencia y Terminación del Contrato.</h4>
    <p className="py-2">La relación contractual regulada en los presentes Términos y Condiciones surtirá efectos desde el momento en que el CLIENTE acepte los Términos y Condiciones. Su plazo será definido entre ÜBANK y el Banco.</p>
    <p className="py-2">Finalizará el servicio cuando el CLIENTE decida Cerrar su cuenta mediante la opción “Cerrar mi Cuenta”, enviando un correo a metabdp@ubankapp.com, indicando que quiere dar de baja su cuenta.</p>
    <p className="py-2">Una vez que el CLIENTE haya cerrado su cuenta en la forma indicada previamente— se procederá a pausar las Reglas automáticas de Ahorro y Proyectos de Ahorro creados por el CLIENTE suspendiéndose el Ahorro Automático. </p>
    <p className="py-2">Igualmente, la Empresa puede cerrar unilateralmente la Cuenta del CLIENTE, cuestión última que queda sometida a la absoluta discreción de la Empresa, respetándose siempre la autonomía del CLIENTE sobre sus decisiones de Ahorro y debiendo informar la Empresa al CLIENTE sobre tal decisión de cierre de cuenta al correo electrónico indicado por el último al momento de la apertura de la cuenta que se procede a cerrar. En este último caso, se entenderá que ha terminado el Mandato, por lo que el CLIENTE deberá a través de su Banco y a contar de ese momento administrar sus ahorros de ahí en más, no existiendo ya relación alguna con la Empresa.</p>

    <h4 className="pt-4">Modificación de los Términos y Condiciones</h4>
    <p className="py-2">La Empresa puede hacer modificación de los Términos y Condiciones descritos en este instrumento previo aviso del nuevo texto a su correo electrónico proporcionada por el CLIENTE al momento de la apertura de la Cuenta y mediante aviso en la misma APP. El CLIENTE tendrá quince días corridos para aceptar las nuevas condiciones. En caso que a los 15 días no haya aceptado expresamente el nuevo texto, la APP condicionará el acceso normal del CLIENTE a su cuenta dándole la opción de aceptar o rechazar los Términos y Condiciones.  Si vencido dicho plazo, el CLIENTE no se pronunciare en un plazo de 30 días se entenderá que su silencio implica rechazo de los nuevos Términos y Condiciones lo que traerá como consecuencia que ha terminado el Mandato, por lo que el CLIENTE deberá a través de su Banco y a contar de ese momento administrar sus ahorros de ahí en más, no existiendo ya relación alguna con la Empresa.</p>

    <h4 className="pt-4">Fuerza mayor</h4>
    <p className="py-2">Mediante la aceptación de los Términos, la Empresa queda exenta de toda responsabilidad de perjuicios directos e indirectos, previstos e imprevistos, si por razones de caso fortuito o fuerza mayor tales como sismos, cortes de energía eléctrica y/o del servicio telefónico y/o líneas de transmisión de datos, intervenciones de redes por parte de terceros, no funcionamiento de redes públicas y/o privadas, no funcionamiento de los sistemas de uno o más bancos, actos terroristas, huelgas u otros similares; no se pudiere mantener en funcionamiento operativo la APP de ÜBANK y por consiguiente no se pudiere prestar el servicio.</p>

    <h4 className="pt-4">Comunicaciones</h4>
    <p className="py-2">La aplicación hace uso de notificaciones internas y envío de correos electrónicos que el CLIENTE registra al momento de efectuar la suscripción al servicio para comunicar nuevas funcionalidades, reglas activadas, movimiento de fondos a productos de ahorro o inversión, ofertas de productos y servicio, encuestas y solicitudes de retroalimentación, cambios en los términos y condiciones y cualquier actividad o solicitud que la Empresa requiera para poder ofrecer su servicio de manera adecuada.</p>

    <h4 className="pt-4">Ley Aplicable y Arbitraje</h4>
    <p className="py-2">En caso de que se presenten controversias y las mismas no puedan ser solucionadas en forma amigable entre las partes, estas renuncian a la jurisdicción ordinaria, a su fuero y domicilio y se someterán a arbitraje administrado por el Centro de Arbitraje y Conciliación de la Cámara de Comercio de Guayaquil, de acuerdo con el reglamento del referido Centro, cuyas normas expresamente aceptan. El arbitraje será en derecho.  La sede del arbitraje será Guayaquil. El tribunal arbitral estará compuesto por tres árbitros, y sus alternos. El Tribunal arbitral estará facultado para dictar medidas cautelares y solicitar, para la ejecución de dichas medidas, el auxilio de los funcionarios públicos, judiciales, policiales y administrativos, sin necesidad de recurrir a juez ordinario alguno. Las partes aceptan que este sometimiento a arbitraje en nada afecta el derecho del BANCO, de recurrir ante los jueces competentes si lo considera adecuado, al amparo de la Ley de Defensa del Consumidor y su correspondiente reglamento.</p>

  </div>
)

export default LegalPage