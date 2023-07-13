function readURL(input) {
    if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                    $('#upload_image')
                            .attr('src', e.target.result)
                            .width(250)
                            .height(250)
                            .show();
            };

            reader.readAsDataURL(input.files[0]);
    }
}