 var images = [
            "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             ];
             var names = [
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
            ];
            var i = 0;
            function update() {
                i++;
                var number_of_family_member_in_array = 7
                if(i  > number_of_family_member_in_array)
                {
                    i = 0;
                }
                document.getElementById("family_member_image").src = updatedimage
                document.getElementById("family_member_name").innerHTML = updatedname
            }