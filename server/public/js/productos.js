function productoModal(data){   
    const producto = $(data).data('producto');
    console.log(producto)

    $('selector').html('');
    $('id demodal').modal('show');
}