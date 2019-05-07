function salir(){
    //Formulario llenado al 100%
    alertify.confirm('Importante!!','Una vez finalizada la captura de informacion , ya no podrás realizar ningun cambio a los datos introduccidos , sin embargo una vez generado el usuario para ingresar al sistema SYSACAD , dentro de el podras realizar los cambios en tu información personal \n ¿Estas seguro de finalizar la captura de tus datos?' , function()
        { 
          alertify.alert()
            .setting({
              'title':'Felicidades !!',
              'label':'Salir',
              'message': 'Se ha enviado un correo al administrador del sistema SYSACAD , notificando que has registrado la información ,estos datos servirán para generar tu usuario al sistema académico. Una vez procesados los datos se enviaran las credenciales a tu correo intitucional '+correo ,
              'onok': function(){ alertify.message('Gracias !'); final();  verInicio(); preCarga(1000)}
            }).show();
        }, 
        function()
        { 
            alertify.warning('Se ha cancelado la acción')
        }
    );
}