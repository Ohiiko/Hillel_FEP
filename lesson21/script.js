"use strict" 

$( function() {
  let dialog, form,
  title = $( "#title" ),
  description = $( "#description" );

  const bodyBoard = $('#bodyBoard');
  const stikerItemTemplate = $('#stikerItemTemplate').html(); 
    
  let stikers = [];

  

  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": submitStiker,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[0].reset();

    }
   });
  
  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    submitStiker();
  });
  
  $( "#btnAddStiker" ).button().on( "click", function() {
    dialog.dialog( "open" );
   });

  bodyBoard.on('click', '.deleteStikerBtn', onDeleteStikerBtnClick);
    
  function submitStiker() {
    const newStiker = {
      id: Date.now(),
      title,
      description
    }
    form.serializeArray().forEach(({ name, value }) => {  
      newStiker[name] = value;
    })
    stikers.push(newStiker);
    console.log(stikers);
    bodyBoard.append(getStikersHtml(newStiker));
    dialog.dialog( "close" );
    setState()
  }

  

    

  function onDeleteStikerBtnClick(){
    deleteTaskElement(this.parentElement.dataset.idTask);
  }

  init()

  function init(){
    stikers = getState();
    renderStikers(stikers);
  }

  function getStikersHtml({ id, title, description }) { 
    return stikerItemTemplate.replace(`{{id}}`, id)
                            .replace(`{{title}}`, title)
                            .replace(`{{task}}`, description)
  }

  function renderStikers(stikers) {
    const stikersHtml = stikers.map(elem => {
      return getStikersHtml(elem);
    })
    bodyBoard.html(stikersHtml.join('\n'));
  }

  function deleteTaskElement(id){
    stikers = stikers.filter(elem => elem.id != id);
    deleteStikerOnBoard(id);
    setState()
  } 

  function deleteStikerOnBoard(id){
    const taskStiker = $(`[data-id-task="${id}"]`);
    taskStiker && taskStiker.remove();
  }

  function setState() {
    localStorage.setItem('board', JSON.stringify(stikers))
  }
  
  function getState() {
    const stikersList = localStorage.getItem('board'); 
    return stikersList ? JSON.parse(stikersList) : [];
  }
} );
