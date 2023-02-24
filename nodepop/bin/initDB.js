'use strict';

// Require mongoose module
const connection = require('../lib/connectMongoose');
const anuncio = require('../models/anuncios');
  

main().catch(err => console.log('Hubo un error', err));

async function main() {

  // inicializamos colección de anuncios
  await initAnuncios();

  connection.close();

}

async function initAnuncios() {
  // borrar todos los documentos de la colección de anuncios
  const deleted = await anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // crear anuncios iniciales
  var countInserted = 0;
  const regs=2;
  for(let i=0;i<regs;i++){
  const inserted = await anuncio.insertMany([
    { nombre: 'Balon', estado: 'venta', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'busqueda', precio: 199.99, foto:'images/sofa.jpg', tag: 'lifestyle'},
    { nombre: 'Iphone', estado: 'venta', precio: 1199.99, foto:'images/iphone.jpg', tag: 'mobile'},
    { nombre: 'Ferrari', estado: 'busqueda', precio: 234000, foto:'images/ferrari.jpg', tag: ['motor','lifestyle']},
  ]);
  countInserted++
  }
  countInserted=countInserted*regs;
  //console.log(`Creados ${inserted.length} anuncios`);
  console.log("Creados "+(countInserted*2)+" anuncios");
}
