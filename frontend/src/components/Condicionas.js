import React, { useEffect } from "react";
import "../css/Condicionas.scss";
import Footer from "./Footer";
import Nav from "./Nav";
import Helmet from "react-helmet";

function Condicionas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlecheck = () => {};
  return (
    <div>
      <Helmet>
        <title>Armea/Conditions</title>
        <meta
          name="description"
          content="información sobre las condiciones de las compras en el armea"
        />
        <meta name="keywords" content="armeaDelivery,PRICEofmuebles" />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="condicionas">
        <div className="condlinkdiv">
          <p>
            Inicio <span className="condspan"> {">"} politica de cookies</span>{" "}
          </p>
        </div>
        <div className="condheaddiv">
          <p className="condhead">
            Condiciones de <span className="condspan">uso y compra</span>
          </p>
        </div>
        <div className="centre">
          <div className="condparadiv">
            <p>1. OBJETO.</p>
            <p>
              1.1. Las presentes condiciones legales regulan el uso y las
              condiciones de acceso del sitio Web www.armeamuebles.com.
            </p>
            <p>
              1.2. El uso o el acceso a este sitio implica que usted reconoce
              haber leído y comprendido las presentes condiciones legales de
              uso, y acuerda cumplirlas en su totalidad.
            </p>
            <p>
              1.3. Si usted como usuario no está de acuerdo con alguna de las
              presentes condiciones deberá dejar de acceder a este sitio.
            </p>
            <br></br>

            <p>2. PROPIEDAD DEL SITIO.</p>
            <p>
              2.1. En conformidad con la Ley 34/2002, de 11 de julio y demás
              legislación aplicable le informamos que este sitio web
              www.armeamuebles.com es propiedad de la entidad con denominación
              social “CREALBER S.L” con C.I.F B-54368485.
            </p>
            <p>
              2.2. Dicha entidad tiene su domicilio social en MARIANO ESCOBEDO
              2631 COL. VICTORIA MONTERREY N.L.
            </p>
            <p>
              2.3. Puede contactar con nosotros en el número de teléfono "647
              528 812" /“965 082 828 “o en la dirección de correo
              electrónico"info@armea.com".
            </p>
            <p>
              2.4. Salvo que expresamente se establezca de otro modo, las
              comunicaciones con "armea" se podrán realizar mediante correo
              ordinario en la dirección física o mediante correo electrónico. La
              compañía se pondrá en contacto con el Usuario vía correo
              electrónico, en la dirección que obre en su poder o le sea
              facilitada al respecto.
            </p>
            <br></br>

            <p>3. FUNCIONAMIENTO DEL SITIO.</p>
            <p>
              3.1. Los usuarios del sitio son consciente y aceptan que parte de
              la información contenida en él podría ser incorrecta, estar
              incompleta o anticuada, o contener errores tipográficos. "armea"
              no está obligada a actualizar el contenido de este sitio y no será
              responsable de la no actualización de la información. Es de
              exclusiva responsabilidad del usuario evaluar la exactitud y/o
              utilidad de cualquier información, consejo, opinión, o cualquier
              otro contenido disponible a través de este sitio.
            </p>
            <p>
              3.2. Así mismo "armea" se reserva el derecho a suspender
              temporalmente, sin necesidad de previo aviso, el acceso a este
              sitio para realizar operaciones de mantenimiento, actualización,
              mejora o de reparación.
            </p>
            <p>
              3.3. Está prohibido que el usuario utilice este sitio web para el
              envío, la transmisión o la publicación de cualquier material
              ilegal, amenazante, calumnioso, difamatorio, propagandístico,
              escandaloso, obsceno, pornográfico, o cualquier otro material que
              pudiera dar lugar a responsabilidades civiles o penales conforme a
              la legislación aplicable, hechos éstos de los que en cualquier
              caso será responsable el usuario.
            </p>
            <p>
              3.4. "armea" tampoco garantiza que este sitio web o los servidores
              que lo alojan estén libres de virus y de otro tipo de software
              potencialmente peligroso, así como la disponibilidad, continuidad,
              utilidad e infalibilidad del funcionamiento de este sitio, de sus
              servicios o sus contenidos; ni la licitud, fiabilidad o utilidad
              de la información y contenidos suministrados por terceros a través
              de este sitio.
            </p>
            <p>
              3.5. Con carácter general sólo podrán usar este sitio las personas
              físicas y jurídicas con capacidad jurídica suficiente de acuerdo
              con la legislación aplicable. De modo excepcional podrán usar el
              sitio menores de edad que hayan obtenido previamente la
              autorización de sus padres o tutores legales, los cuales serán
              responsables del uso que el menor a su cargo haga del sitio.
            </p>
            <br></br>

            <p>4. COMPORTAMIENTO DE LOS USUARIOS. PROHIBICIONES.</p>
            <p>
              4.1. El uso de los contenidos y servicios ofrecidos por "armea"
              será bajo el exclusivo riesgo y responsabilidad del usuario.
            </p>
            <p>
              4.2. La compañía no asume ningún deber o compromiso de verificar
              ni de vigilar los contenidos e informaciones introducidos por los
              usuarios.
            </p>
            <p>
              4.3. El usuario se compromete a utilizar el sitio web y todo su
              contenido y servicios de un modo diligente, siempre con sujeción a
              la Ley, a las buenas costumbres, y a las presentes condiciones
              generales, manteniendo siempre el respeto hacia los demás
              usuarios.
            </p>
            <p>
              4.4. Asimismo, el usuario se compromete a hacer un uso adecuado de
              los materiales e informaciones contenidos en el sitio web, no
              empleándolos para realizar actividades ilícitas o constitutivas de
              delito, que atenten contra los derechos de terceros, o que
              infrinjan la regulación sobre propiedad intelectual e industrial,
              o cualesquiera otras normas del ordenamiento jurídico aplicable,
              siendo el único responsable frente a "Bainba" y a terceros por el
              incumplimiento de lo aquí establecido.
            </p>
            <p>
              4.5. El usuario se compromete a no trasmitir, introducir, difundir
              o poner a disposición de terceros, cualquier tipo de material e
              información contrarios a la Ley, a la moral, al orden público y a
              las presentes condiciones generales de uso.
            </p>
            <p>
              4.6. En todo caso, el usuario habrá de aportar siempre una
              información veraz que no pueda llevar a ningún tipo de confusión,
              así como datos identificativos correctos, y nunca suplantando a
              terceros o en nombre de éstos.
            </p>
            <p>
              4.7. En relación a la infracción de cualquier irregularidad,
              recuerde que la dirección IP de su ordenador queda registrada por
              el simple acceso a nuestro sitio web.
            </p>
            <br></br>

            <p>5. ZONAS PROTEGIDAS DEL SITIO WEB.</p>
            <p>
              5.1. Generalmente para el acceso a los servicios de "armea" no
              será necesario la suscripción o registro del usuario.
            </p>
            <p>
              5.2. La utilización de determinados servicios podrá estar
              condicionada a la previa obtención de una cuenta personal mediante
              el registro del usuario. Este registro se efectuará en la forma
              expresamente señalada en el sitio web.
            </p>
            <p>
              5.3. Este sitio puede contener zonas de acceso restringido,
              protegidas por identificadores y contraseñas u otros mecanismos de
              seguridad. El usuario no intentará acceder a estas zonas de acceso
              restringido si no está debidamente autorizado por "Bainba", ni
              intentará soslayar o manipular los mecanismos de protección
              establecidos por ella.
            </p>
            <p>
              5.4. El usuario que haya sido autorizado por "armea" para acceder
              a alguna de estas zonas protegidas será el exclusivo responsable
              de mantener en estricto secreto, y no divulgar a terceros, los
              identificadores, contraseñas y demás métodos de seguridad que
              "Bainba" ponga a su disposición para acceder a las zonas
              protegidas. El usuario será por tanto el único responsable de los
              daños que se deriven de no mantener en secreto los mecanismos de
              seguridad mencionados.
            </p>
            <p>
              5.5. Se comunica al usuario que el intento de acceso no autorizado
              a las zonas de acceso restringido de este sitio puede estar sujeto
              a responsabilidad civil y penal.
            </p>

            <br></br>

            <p>6. PROPIEDAD INTELECTUAL E INDUSTRIAL.</p>
            <p>
              6.1. Todos los contenidos del sitio, incluyendo a título
              enunciativo y no limitativo, las marcas comerciales, logotipos,
              gráficos, imágenes, archivos de sonido y vídeo, software, código
              de programación, textos, iconos, y los nombres que identifican
              servicios (en adelante "los materiales") son propiedad de "Bainba"
              y están protegidos por la legislación vigente en materia de
              derechos de propiedad intelectual e industrial.
            </p>
            <p>
              6.2. El acceso del usuario a este sitio no implica ningún tipo de
              renuncia, transmisión ni cesión, total o parcial, de dichos
              derechos de propiedad, por esta razón, el acceso a estos
              contenidos o elementos no otorga, bajo ningún concepto, al usuario
              la posibilidad de su copia, venta, modificación, reproducción,
              publicación, cesión, transmisión, o creación de nuevos productos o
              servicios derivados de la información y elementos aquí contenidos.
            </p>
            <p>
              6.3. Es por ello que el usuario de este sitio no podrá, salvo
              previa autorización expresa y por escrito de "Bainba", copiar,
              distribuir, descargar, modificar, suprimir, borrar, alterar,
              publicar, transmitir, o aprovecharse de cualquier forma de los
              materiales que contiene.
            </p>
            <p>
              6.4. El usuario no adquiere derechos o licencia en relación con el
              servicio ni los elementos en el mismo, excepto el derecho limitado
              a utilizar el servicio de acuerdo con las condiciones aplicables.
              Únicamente podrá utilizar los contenidos o elementos a los que
              acceda a través de los servicios de "Bainba" para su propio uso y
              necesidades, obligándose a no realizar ni directa, ni
              indirectamente una explotación comercial, ni de los servicios, ni
              de los materiales, elementos, o información obtenidos a través de
              los mismos.
            </p>

            <br></br>
            <p>7. PROTECCIÓN DE DATOS Y POLÍTICA DE PRIVACIDAD.</p>
            <p>
              7.1. De acuerdo con lo establecido en la legislación vigente en
              materia de protección de datos de carácter personal, "Bainba"
              informa al usuario de la existencia de un fichero de datos de
              carácter personal que contiene los datos que los usuarios
              introducen en el sitio. "Bainba" es responsable del fichero.
            </p>
            <p>
              7.2. El usuario y titular de los datos queda informado, y presta
              su consentimiento inequívoco, de que mediante la cumplimentación
              de los diversos formularios sus datos personales quedarán
              incorporados a los ficheros automatizados de "Bainba", con el fin
              de poderle prestar y ofrecer nuestros servicios así como mantener
              informado al usuario sobre los productos ofertados.
            </p>
            <p>
              7.3. "Bainba" se compromete al cumplimiento de su obligación de
              secreto con respecto a los datos de carácter personal y al deber
              de tratarlos con confidencialidad. A estos efectos adoptará las
              medidas de seguridad razonables previstas por la ley para evitar
              su alteración, pérdida o acceso no autorizado.
            </p>
            <p>
              7.4. El usuario podrá ejercer sus derechos de acceso,
              rectificación, cancelación y oposición de sus datos de carácter
              personal mediante el envío de un correo electrónico a
              “datos@armea.com", facilitando una fotocopia de su D.N.I,
              pasaporte u otro documento que lo identifique.
            </p>
            <p>Política de Privacidad de la página web de Bainba</p>
            <p>
              La presente Política de Privacidad regula la recogida y
              tratamiento de los datos personales que sean proporcionados por
              los Usuarios, cuando accedan, naveguen o hagan uso de las
              funcionalidades en el Sitio Web accesible desde la URL:
              https://www.armeamuebles.com (en adelante, el Sitio Web).
            </p>
            <p>
              Recogida de datos, finalidades, base de legitimación y plazos de
              conservación:
            </p>
            <p>
              La aceptación de esta Política de Privacidad significa que el
              Usuario faculta a Crealber, S.L. (en adelante armea), NIF
              B54368485 y domicilio en MARIANO ESCOBEDO 2631 COL. VICTORIA
              MONTERREY N.L. como titular del Sitio Web, para realizar el
              tratamiento de sus datos e incluirlos en un registro de
              tratamientos de su responsabilidad, para los fines estipulados a
              continuación:
            </p>
            <p>
              a. Contacto: El Usuario puede ponerse en contacto, a través de los
              formularios establecidos a tal efecto en el Sitio Web. Deberá
              facilitar sus dados identificativos, así como el motivo, asunto o
              cuestión. armea utilizará esos datos para tramitar la consulta y
              contactar con el Usuario en relación a la misma. La base jurídica
              del tratamiento de tales datos se sustenta en el consentimiento
              del Usuario. El plazo de conservación de los datos para esta
              finalidad será el de un año, salvo que sean aplicables otros
              plazos.
            </p>
            <p>
              b. Registro: El Usuario puede registrarse en el Sitio Web, a
              través del formulario establecido al efecto. Para registrarse
              deberá facilitar cierta información personal y de contacto, que
              necesitamos para tramitar su registro y ofrecerle los oportunos
              servicios, entre los que está la posibilidad de adquirir
              cualquiera de los productos ofertados. La base jurídica del
              tratamiento de tales datos se sustenta en el consentimiento del
              Usuario. El plazo de conservación de los datos para esta finalidad
              será el de cinco años.
            </p>
            <p>
              c. Compra de productos: A fin de adquirir cualquiera de los
              productos ofrecidos en el Sitio Web, el Usuario deberá facilitar
              su información personal y de contacto, así como ciertos datos
              bancarios a fin de gestionar correctamente los pagos, así como
              efectuar la entrega de los pedidos. La base jurídica del
              tratamiento de tales datos se sustenta en la ejecución de un
              contrato El plazo de conservación de los datos para esta finalidad
              será el de 5 años.
            </p>
            <p>
              d. Newsletter: El Usuario puede, si lo desea, facilitar sus datos
              identificativos y su dirección de correo electrónico para
              suscribirse a las novedades, promociones y noticias de Bainba,
              para recibir periódicamente comunicaciones en su correo
              electrónico o dispositivo móvil (en su caso). La base jurídica del
              tratamiento de tales datos se sustenta en el consentimiento del
              Usuario. El plazo de conservación de los datos será del tiempo que
              permanezca dado de alta en nuestro sistema de envío de newsletter.
            </p>
            <p>
              e. Blog: El Usuario puede realizar comentarios en el blog armea,
              para lo cual es necesario que facilite sus datos identificativos
              (Nombre y correo electrónico). El tratamiento de estos datos
              tendrá como única finalidad gestionar la publicación en el Sitio
              Web. La base jurídica del tratamiento de tales datos se sustenta
              en el consentimiento del Usuario. Sus comentarios permanecerán
              permanentemente en el Sitio Web salvo que solicite su borrado.
            </p>
            <p>
              f. Cookies: El Sitio Web dispone de tecnología para la
              implantación de archivos denominados Cookies en el equipo que sea
              utilizado para el acceso y navegación por el Sitio Web. Las
              Cookies pueden ser bloqueadas o deshabilitadas en cualquier
              momento a través de las opciones de configuración del navegador.
              Si desea más información puede consultar nuestra Política de
              Cookies [1]. La base jurídica del tratamiento de tales datos se
              sustenta en el consentimiento del Usuario.
            </p>
            <p>Finalidades publicitarias y tratamientos especiales:</p>
            <p>
              Publicidad: Si el Usuario lo autoriza expresamente, armea podrá
              enviarle publicidad de los servicios y/o promociones disponibles
              en el Sitio Web, como por ejemplo novedades en productos de
              Bainba. En cualquier caso, podrá revocar dicho consentimiento
              cuando quiera a través del correo electrónico datos@bainba.com o a
              través de cualquier otro medio destinado a tal efecto que hubiera
              sido incluido en las comunicaciones remitidas. La base jurídica
              del tratamiento de tales datos se sustenta en el consentimiento
              del Usuario.
            </p>
            <p>
              El plazo de conservación de los datos será del tiempo que
              permanezca dado de alta en nuestro sistema para el envío de
              publicidad y no se haya opuesto, salvo que sean aplicables otros
              plazos.
            </p>
            <p>Modificación y supresión de la cuenta de usuario</p>
            <p>
              En cualquier momento el Usuario puede modificar la información
              facilitada al registrarse en el Sitio Web, a través las funciones
              allí habilitadas. De no encontrarlas o no estar disponibles, puede
              remitir un correo electrónico a datos@bainba.com indicándolo. Para
              dar de baja su cuenta, el Usuario puede escribir indicándolo a la
              misma dirección.
            </p>
            <p>Encargados del tratamiento</p>
            <p>
              La prestación de los servicios ofrecidos por armea requieren de la
              contratación de servicios de alojamiento, almacenamiento y
              procesamiento, entre otras cuestiones técnicas, como puede ser el
              desarrollo del software o el mantenimiento del mismo. En concreto
              los servicios tecnológicos están contratados con las empresas
              listadas en este enlace [ENLACE][2] (en adelante Encargados del
              Tratamiento).
            </p>
            <p>
              El tratamiento de datos realizados por los Encargados del
              Tratamiento se encuentra regulados por contrato por el que se
              obligan, a tratar los datos de forma segura y respetando la
              protección de datos.
            </p>
            <p>
              No obstante, lo anterior, el Usuario conoce y acepta que Bainba
              podrá sustituir a los Encargados del Tratamiento por otros
              prestadores de servicios, para lo cual se garantiza que el nuevo
              prestador respetará igualmente la privacidad y la relación quedará
              regulada contractualmente. Puede conocer a los Encargados del
              Tratamiento en el anterior enlace.
            </p>
            <p>
              Se garantiza que los datos no salen del Espacio Económico Europeo
              de países con acuerdos de nivel de seguridad adecuado reconocido
              por las autoridades[3].
            </p>
            <p>Ejercicio de derechos</p>
            <p>
              Asimismo, el Usuario puede revocar el consentimiento para el
              tratamiento, haciendo ejercicio de los derechos de acceso,
              rectificación, supresión, portabilidad, oposición, limitación al
              tratamiento y supresión, poniéndolo en conocimiento de Bainba a
              través de un correo electrónico dirigido a datos@armea.com o
              indicándolo por correo ordinario a la dirección Pol. Ind. La
              Marjal II C/ Llevant 22, 03430, Onil, Alicante, señalando como
              asunto “Protección de Datos”. Deberá acompañar o adjuntar una
              copia de su DNI o de cualquier otro documento oficial que nos
              permita identificarle, a fin de comprobar su identidad y evitar
              que terceros tengan acceso a sus datos personales de manera
              indebida.
            </p>
            <p>
              En cualquier momento, el Usuario podrá presentar una reclamación
              ante la Agencia Española de Protección de Datos.
            </p>

            <br></br>
            <p>8. POLÍTICA DEL USO DE COOKIES.</p>
            <p>
              8.1. Los "Cookies" son ficheros de texto que los servidores que
              alojan sitios web envían a los navegadores de sus usuarios. Los
              cookies no se pueden ejecutar ni pueden contener virus, y sólo
              pueden leerse por el servidor que aloja el sitio web.
            </p>
            <p>
              8.2. Este sitio requiere el empleo de "Cookies" para su correcto
              funcionamiento.
            </p>
            <br></br>

            <p>9. INFORMACIÓN TRANSMITIDA POR LOS USUARIOS.</p>
            <p>
              9.1. Este sitio puede contener foros públicos, salas de
              conversación ("chats") y otros mecanismos mediante los cuales los
              usuarios pueden expresar su opinión e intercambiar archivos en
              formato electrónico. Las informaciones, las comunicaciones y los
              ficheros que se envíen a través de estos foros y salas, junto con
              las direcciones de correo electrónico y otras comunicaciones
              divulgadas por los usuarios no tendrán la consideración de
              material confidencial.
            </p>
            <p>
              9.2. Cuando los usuarios transmitan o publiquen cualquier tipo de
              información a este sitio, estarán otorgando autorización a
              "Bainba" para utilizar dicha información, incluyendo, sin
              limitación, la utilización, reproducción, transmisión, publicación
              o envío de dicha información con cualquier objeto, incluyendo, sin
              limitación, la reproducción, revelación, transmisión, publicación
              o envío de dicha información.
            </p>
            <p>
              9.3. "armea" no asume responsabilidad alguna por el contenido de
              la información o de las comunicaciones enviadas por sus usuarios a
              través de estas áreas.
            </p>
            <br></br>

            <p>10. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDADES. </p>
            <p>
              10.1. Toda la información contenida en este sitio se suministra
              "tal cual", sin que "Bainba" otorgue garantías de ninguna clase,
              tanto expresas como implícitas, relativas a la precisión,
              fiabilidad e integridad de este sitio. "Bainba" no otorga ninguna
              garantía, explícita o implícita, incluyendo, a título enunciativo
              y no limitativo, garantías por incumplimiento de calidad, de
              comerciabilidad o de idoneidad para un fin determinado.
            </p>
            <p>
              10.2. "armea" tampoco garantiza que este sitio web, o los
              servidores que lo alojan, estén libres de virus y de otros tipos
              de software potencialmente peligroso.
            </p>
            <p>
              10.3. "armea" no garantiza la disponibilidad, continuidad,
              utilidad e infalibilidad del funcionamiento de este sitio, de sus
              servicios o de sus contenidos; ni la fiabilidad o utilidad de la
              información y contenidos suministrados por terceros a través de
              este sitio. Pese a que "Bainba" realiza todo esfuerzo razonable
              para garantizar la disponibilidad, acceso, continuidad, e
              infalibilidad del funcionamiento y de sus servicios, "Bainba" no
              garantiza las mismas, pues pueden verse interferidas por numerosos
              factores ajenos a ella. En consecuencia, no será responsable, (con
              los límites establecidos en el ordenamiento jurídico vigente), por
              los daños y perjuicios de toda naturaleza causados al usuario como
              consecuencia de la citada indisponibilidad, fallos de acceso y
              falta de continuidad.
            </p>
            <p>11. LIMITACIÓN DE RESPONSABILIDAD.</p>
            <p>
              11.1. "Bainba" no se responsabilizará en forma alguna de cualquier
              daño directo o indirecto, lucro cesante o pérdida de datos y /o
              clientes que se deriven del uso por parte de los usuarios o de la
              imposibilidad de uso de este sitio web.
            </p>
            <p>
              11.2. Este sitio puede contener vínculos hipertextuales ("Links")
              y remisiones a otros sitios y páginas web que pueden no estar
              controlados por "Bainba", en estos casos "armea" no se
              responsabilizará de los contenidos que puedan aparecer en dichas
              páginas. No se acepta ningún tipo de responsabilidad por cualquier
              daño derivado de su uso.
            </p>
            <p>
              11.3. El usuario acepta expresamente dejar exenta a "Bainba" de
              cualquier responsabilidad de los actos u omisiones del usuario
              basadas en los contenidos alojados en este sitio.
            </p>
            <p>
              11.4. El usuario entiende y acepta expresamente que cualquier tipo
              de contenido, software o cualquier otro tipo de material, que
              descargue u obtenga de cualquier otra forma a través de este sitio
              se realiza por su cuenta y riesgo, y que él como usuario será el
              único responsable de cualquier daño o pérdida de datos causada a
              sus sistemas informáticos.
            </p>
            <p>
              11.5. "armea" ha puesto todos los medios razonables para asegurar
              que la información que contiene este sitio es correcta. No
              obstante, los usuarios del sitio aceptan conocer que parte de la
              información contenida en este sitio podría ser incorrecta, estar
              incompleta o anticuada, o contener errores.
            </p>
            <br></br>
            <p>12. DERECHO DE EXCLUSIÓN Y NULIDAD PARCIAL. </p>
            <p>
              12.1. "armea" se reserva el derecho de cancelar, eliminar, o
              desautorizar la utilización de todos o alguno de los servicios del
              sitio web a cualquier usuario sin necesidad de previo aviso si a
              su criterio, y en cualquier tipo de circunstancia, éste estuviera
              realizando un uso incorrecto del mismo.
            </p>
            <p>
              12.2. Si un Tribunal competente resuelve que cualquiera de las
              disposiciones contenidas en estas condiciones legales es ilícita o
              nula, tal disposición será excluida si así se requiriera
              legalmente. El usuario acepta expresamente que el resto de las
              condiciones no excluidas no se verán modificadas, y que seguirán
              teniendo plena vigencia.
            </p>

            <br></br>
            <p>13. DURACIÓN Y REVISIÓN.</p>
            <p>
              13.1. Pese a que la relación jurídica entre "armea" y el usuario,
              derivada del acceso y utilización del sitio, tiene una duración
              indefinida, ésta se considerará finalizada en el momento que la
              compañía modifique las presentes condiciones generales. En el
              momento en el que la compañía anuncie la modificación de las
              condiciones generales, y el usuario acceda y utilice los servicios
              y contenidos del sitio, se considerará iniciada una nueva relación
              jurídica entre ambas partes de carácter igualmente indefinido.
            </p>
            <p>
              13.2. Sin perjuicio de lo anterior, la empresa "armea" está
              facultada para suspender, interrumpir, o dar por finalizada de
              modo unilateral, en cualquier momento y sin necesidad de preaviso
              ni justa causa, la prestación de cualquiera de los servicios que
              ofrece.
            </p>
            <p>
              13.3. "Bainba" se reserva el derecho a revisar, unilateralmente y
              sin previo aviso, las presentes condiciones de uso en cualquier
              momento. Las condiciones revisadas entrarán en vigor tan pronto
              queden publicadas en este sitio. Si el usuario hace uso habitual
              de este sitio deberá revisar las condiciones con regularidad, y se
              abstendrá de acceder al sitio si no considerara aceptables
              cualquiera de las condiciones revisadas.
            </p>

            <br></br>
            <p>14. PLAZOS DE ENTREGA DE LOS SERVICIOS </p>
            <p>
              Una vez realizados los pedidos, el estado de nuestro pedido
              cambiará a "En fabricación". Una vez este en este estado, los
              pedidos tienen un periodo de unos 15 dias laborales de fabricación
              aproximadamente, depende del producto se podrá extender el plazo
              entre unos 15/20 dias laborales.
            </p>
            <p>
              En cada de ficha de producto se quedará indicado su tiempo de
              fabricación.
            </p>
            <p>
              Aunque los productos aparezcan en stock en nuestra pagina, por
              motivos técnicos, logísticos y afines podrán estar igualmente
              sometidos a este período de fabricación de 15 días.
            </p>
            <p>
              Los plazos de fabricación son aproximados, por lo que en algunos
              productos no serán 15 días, podrán ser menos. Se podrá consultar
              la disponibilidad del producto en nuestra atención al cliente.
            </p>
            <p>
              Debido a las circunstancias que estamos viviendo por el COVID-19,
              los pedidos podrán ser retrasados por motivos del transporte, por
              lo que en algunos envíos no se podrá cumplir nuestros plazos de
              entrega establecidos. Pedimos disculpas, haremos todo lo posible
              para que lleguen cuanto antes a su domicilio.
            </p>
            <p>
              El tiempo de preparación del pedido previo al envío será de 1 a 5
              días.
            </p>
            <p>Los plazos de entrega varían según el tipo de envío:</p>
            <p>Entre 2 a 5 días laborables los envíos a península.</p>
            <p>
              Entre 4 y 6 días laborables para envíos a fuera de península a
              Europa o Baleares.
            </p>
            <p>
              Portugal (Península): entrega en 2 a 5 días hábiles, según el
              código postal del destino.
            </p>
            <p>TIPO DE ENVIOS:</p>
            <br></br>
            <p>
              Envío gratuito: Entrega de 2 a 5 días (con este envío los muebles
              se dejarán en el portal del domicilio)
            </p>
            <p>
              Envío con subida garantizada al domicilio: Entrega de 3 a 5 días
              (coste del envío 35€) Se dejará en la puerta del domicilio.
            </p>
            <p>
              Envío con montadores: Entrega de 15-20 días. Los montadores se
              pondrán en contacto con el cliente para establecer día y hora de
              entrega y montaje.
            </p>
            <p>
              El plazo de entrega es aproximado por lo que puede variar las
              fechas de entrega.
            </p>
            <p>
              Para envíos de habitaciones completas, muebles especiales,
              producto en fabricación, tendrá otro plazo de entrega ( 15 días
              aprox de fabricación), esta mercancía se enviará paletizada y la
              entrega será al portal del domicilio (salvo que se contrate el
              servicio de montaje o subida garantizada). El cliente recibirá un
              mensaje cuando su pedido salga de fabrica y por la agencia de
              transporte para comunicar la entrega. Para más información
              contacta con nuestro departamento de Atención al cliente.
            </p>
            <p>
              *Se podrá insertar horario de entrega en el apartado de
              observaciones del pedido, teniendo en cuenta un margen de entrega
              de 4 horas.
            </p>
            <p>15. PRECIO Y CONDICIONES DE PAGO</p>
            <p>
              15.1 Los precios de los productos ofertados en bainba.com para su
              venta, incluyen el correspondiente I.V.A.
            </p>
            <p>
              15.2 El cliente podrá utilizar como medio de pago los siguientes:
            </p>
            <p>
              Transferencia bancaria: una vez hayas realizado tu pedido, te
              mandaremos un email con una descripción completa de tu pedido y un
              número de cuenta bancaria donde podrás efectuar la transferencia.
              Una vez recibida la confirmación del pago, pasaremos a mandarte tu
              pedido inmediatamente.
            </p>
            <p>
              Ten en cuenta que las transferencias desde entidades bancarias
              distintas pueden tardar hasta dos días hábiles, sin contar los
              fines de semana ni los días festivos, según la propia normativa
              bancaria.
            </p>
            <p>
              Tarjeta de crédito: esta forma de pago es inmediata, cómoda y
              segura. Al terminar tu pedido, podrás hacer el pago en la página
              de tu banco a través de la pasarela Redsys. Bainba no recibirá tus
              datos bancarios ni en ningún caso tendrá acceso a ellos.
            </p>
            <p>
              Paypal: es la forma más popular, cómoda, rápida y segura de pagar
              a través de Internet. Puedes vincular tu tarjeta de débito, tu
              tarjeta de crédito o tu cuenta bancaria con tu cuenta de PayPal
              fácilmente. Coste adicional de 1,5%.
            </p>
            <p>
              Pago fraccionada: en plazos de 3, 6 ó 12 cuotas mensuales, a
              través de Sequra. Es inmediato, no requiere ningún papeleo y sólo
              añade un coste fijo por cuota.
            </p>
            <p>
              *Los pagos realizados a través de tarjeta se realizan bajo el
              amparo de un servidor seguro SSL.
            </p>
            <p>
              16.1 Tiene usted derecho a desistir del presente contrato en un
              plazo de 14 días sin necesidad de justificación.
            </p>
            <p>
              16.2 El plazo de desistimiento expirará a los 14 días del día que
              usted o un tercero por usted indicado, distinto del transportista,
              adquiera la posesión material de los bienes.
            </p>
            <p>
              16.3 Para ejercer el derecho de desistimiento, deberá contactar
              con el centro de atención al cliente de bainba.com en el número de
              teléfono 965 082 828 o bien enviar un e-mail a la dirección
              info@bainba.com indicando su nombre, domicilio, número de
              pedido/factura y número de teléfono, manifestando su decisión de
              desistir. No se aceptarán devoluciones no autorizadas expresamente
              por el vendedor.
            </p>
            <p>
              Para cumplir el plazo de desistimiento, basta que la comunicación
              relativa al ejercicio por su parte del derecho de desistimiento
              sea enviada antes de que venza el plazo de desistimiento.
            </p>
            <p>
              16.4 El cliente podrá enviar el producto por el medio de
              transporte de su elección, incluyendo el servicio de correos.
              Asimismo, si lo desea puede solicitar por teléfono o a través de
              e-mail que le mandemos un transportista, el cual se pondrá en
              contacto con el cliente para recoger el producto en la dirección
              que le indique (siempre localizada en el mismo país en el que
              efectuaste tu pedido).
            </p>
            <p>
              16.5 Sea cual sea la forma de devolución elegida, el cliente
              deberá asumir el coste directo de devolución de los bienes, es
              decir, el transporte hasta nuestras instalaciones.
            </p>
            <p>
              16.6 Sólo se admitirá la devolución de artículos en perfecto
              estado, en su embalaje original y que no hayan sido utilizados por
              el cliente. Junto con la mercancía devuelta, el cliente incluirá
              una copia de la factura de venta que se envío con la mercancía,
              así como un número de cuenta en el que se haya de realizar el
              abono de la mercancía.
            </p>
            <p>
              16.7 Una vez verificado el estado de la mercancía devuelta, y
              descontados los gastos de entrega, se procederá al abono del
              precio del producto en las 48 horas siguientes a la recepción de
              la devolución.
            </p>
            <p>
              16.7 No se hará ningún reembolso si el producto ha sido usado,
              productos que no estén en las mismas condiciones en las que fueron
              entregados o que hayan sufrido algún daño.
            </p>
            <p>
              16.8 Las devoluciones que sean aceptadas por bainba.com como
              resultado de un error en el envío no imputable al cliente,
              correrán por cuenta del vendedor, incluyendo los gastos derivados
              del envío y recogida de la mercancía errónea.
            </p>
            <p>
              16.9 Solo será usted responsable de la disminución de valor de los
              bienes resultante de una manipulación distinta a la necesaria para
              establecer la naturaleza, las características y el funcionamiento
              de los bienes.
            </p>
            <p>
              16.10 En caso de devoluciones de productos que han sido enviados a
              Canarias, Ceuta y Melilla, se aplicaran las mismas condiciones
              expuestas con anterioridad.
            </p>
            <p>
              16.11 Reclamaciones: desde bainba.com intentaremos solucionar
              cualquier incidencia de forma amistosa, pero ponemos a disposición
              de todos los clientes hojas de reclamaciones en nuestra dirección
              física: Polígono Ind. II C/ Llevant, 22 03430 Onil (Alicante).
              Pero si lo prefiere puede descargarse el impreso oficial a través
              de la página web de la Dirección General de Consumo de su
              Comunidad Autónoma.
            </p>
            <p>
              16.12 En el caso de elegir la opción de montaje de los muebles, en
              caso de devolución del producto es necesario conservar el embalaje
              original para que en caso de devolución sean devueltos en su
              embalaje.
            </p>
            <p>
              16.13 No se podrán devolver productos confeccionados comforme a
              las especificaciones del consumidor o personalizados (medidas
              especiales), así como productos precintados que no sean aptos para
              ser devueltos por razón de higiene y que hayan sido desprecintados
              tras la entrega (por ejemplo colchones y almohadas).
            </p>

            <br></br>
            <p>17. GARANTÍA</p>
            <p>
              17.1 Los productos que presenten algún defecto o avería técnica
              estarán sujetos al régimen de garantía.
            </p>
            <p>
              17.2 Los artículos adquiridos quedan garantizados, ante cualquier
              defecto de fabricación durante un plazo de dos años desde la fecha
              de la recepción de cada uno de ellos, en los términos recogidos en
              el Real Decreto Legislativo 1/2007 de fecha 16 de Noviembre de la
              Ley general de Defensa de los Consumidores y usuarios y otras
              leyes complementarias. En estos casos, el cliente puede optar
              entre exigir la reparación o sustitución del producto, salvo que
              una de estas dos opciones resulte imposible o desproporcionada. En
              el caso de que no pueda ser reparado el producto y tampoco pueda
              ser sustituido por otro de idénticas características, se procederá
              al reembolso
            </p>
            <p>
              17.3 Cuando el producto esté defectuoso deberá ponerse en contacto
              con bainba.com, bien a través de nuestro e-mail info@bainba.com
              indicando el número de factura, datos del producto y los daños que
              sufre, o bien llamando por teléfono al número 965 082 828 donde se
              le indicará la forma de proceder.
            </p>
            <p>
              17.4 La garantía incluye los gastos de envío, el material y la
              mano de obra. No obstante, pasados 7 días de la recepción de los
              productos, bainba.com no se hace cargo de ningún tipo de gasto
              derivado de los gastos de envío y comisiones, en el caso de que el
              usuario haga uso de la garantía.
            </p>
            <p>
              17.5 Una vez recibido el producto por bainba.com, si este
              funcionara correctamente, se le facturará al cliente por la
              revisión del producto.
            </p>
            <p>
              17.6 Recuerde que una vez entregado el producto, el propietario
              adquiere toda la responsabilidad sobre su uso. Asegurarse de que
              la persona que lo utiliza tiene la edad apropiada para una
              utilización segura y responsable. El uso de los mismos es bajo su
              propio riesgo y responsabilidad. Ni el fabricante, ni el
              comerciante son responsables de posibles daños personales.
            </p>
            <p>
              17.7 Quedan excluidos los derechos de garantía a causa de defectos
              que se deban a:
            </p>
            <p>Pérdida de la factura de compra.</p>
            <p>Rotura o manipulación de los precintos de garantía.</p>
            <p>Reparaciones de mantenimiento, ajuste, revisión o limpieza.</p>
            <p>Material dañado, sin embalaje adecuado y daños de transporte.</p>

            <p>
              Cuando la causa de los daños o de la avería sea el desgaste por
              funcionamiento o muestras evidentes de una manipulación incorrecta
              o uso indebido, maltrato, golpes, caídas, suciedad, la no
              aplicación de las instrucciones del manual que lo acompaña, o
              averías producidas por otras causa no atribuibles a las
              condiciones normales de funcionamiento, serán tratados como
              REPARACIÓN ordinaria bajo presupuesto, en todos los casos.
            </p>
            <p>18. VALIDEZ DE LAS OFERTAS/ DESCUENTOS</p>
            <p>
              Los productos que se encuentran en el sitio web de Bainba y los
              precios de los éstos, estarán disponibles mientras se encuentren
              en el catálogo del sitio web y se estén visualizando.
            </p>
            <p>
              Bainba se reserva el derecho de efectuar cambios y modificaciones
              en el sitio web, así como actualizar productos, cambiar los
              precios sin previo aviso, cambiar descripciones y fotografías.
            </p>
            <p>
              En el caso de los cupones de descuento no se pueden aplicar dos
              códigos de descuento a la vez, solo se permite el uso de uno.
            </p>
            <p>19. DERECHO A MODIFICAR LAS CONDICIONES </p>
            <p>
              18.1. "Bainba" se reserva el derecho a modificar, en cualquier
              momento, unilateralmente y sin necesidad de previa notificación a
              sus usuarios, los contenidos, la estructura, el funcionamiento o
              las condiciones de acceso de este sitio.
            </p>

            <br></br>

            <p>20. LEY APLICABLE Y JURISDICCIÓN.</p>
            <p>
              19.1 Este sitio se encuentra ubicado y es operado desde España.
              Todas las cuestiones relativas a este sitio se rigen por las leyes
              españolas.Cualquier controversia relativa a la condiciones de uso
              y acceso a este sitio web las partes se someten, renunciando
              expresamente a cualquier otro fuero que pudiera corresponderles,
              salvo que por imperativo legal se determine lo contrario, a los
              Juzgados y Tribunales del domicilio del vendedor.
            </p>
            <p>
              19.2. Si el usuario decide utilizar o consultar este sitio desde
              fuera de España, deberá tener presente que lo hace por propia
              iniciativa, y que es responsable del cumplimiento de las leyes
              locales pertinentes.
            </p>

            <br></br>
            <p>21. MONTAJE DE PRODUCTOS </p>
            <p>
              20.1 Desde www.bainba.com ofrecemos la opción de que el cliente
              pueda incluir el montaje en su pedido, siempre y cuando éste sea
              realizado desde España peninsular o las islas Baleares.
            </p>
            <p>
              20.2 Si elige esta modalidad en su pedido nos pondremos en
              contacto con usted en un plazo de entre 14 y 20 días para
              concretar fecha y hora para realizar el montaje en su hogar.
            </p>
            <p>
              20.3 La no asistencia por parte del cliente el día y la hora
              indicadas será motivo de pérdida del valor del montaje, teniendo
              que realizar un nuevo pago en caso de quererlo nuevamente.
            </p>
            <p>
              20.4 Se procederá al montaje de todos los muebles, salvo aquellos
              que requieran instalación eléctrica o colocación a techo o pared.
            </p>
            <p>20.5 Tabla de precios de montaje</p>
            <p>
              El importe del servicio de montaje varía según el valor del
              pedido.
            </p>
            <p>Ejemplos:</p>
            <p>Valor del pedido Valor del montaje</p>
            <p>0 -85€ 85€</p>
            <p>850 - 1100€ 110€</p>
            <p>1100 - 1350€ 135€</p>
            <p>1350 - 1600€ 160€</p>
            <p>1600 - 1850€ 185€</p>
            <p>1850 - 2100€ 210€</p>
            <p>2100 - 2350€ 235€</p>
            <p>2350 - 2600€ 260€</p>
            <p>2600 - 2850€ 285€</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Condicionas;
