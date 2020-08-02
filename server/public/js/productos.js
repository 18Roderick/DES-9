function productoModal(data) {
  const producto = $(data).data('producto');
  console.log(producto);

  $('.mdTituloProducto').html(producto.titulo);
  $('.cantidad').html('Cantidad disponible: ' + producto.stock);
  $('.categoria').html(producto.categoria);
  $('.descripcion').html(producto.descripcion);
  $('.input-group-text.precio').html(producto.precio.toFixed(2));
  $('.imagenProducto').prop('src', producto.imagen[0]);
  $('#CantidadProductosComprar').prop('max', producto.stock);
  $('id demodal').modal('show');

}
