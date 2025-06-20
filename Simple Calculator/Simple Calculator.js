        document.title = 'Calculator';

        let displayer = document.querySelector("input");

      
        function viewer(input) {
            displayer.value += input;
        }

      
        function calculation(event) {
            if (event.key === 'Enter') {
                try {
                    displayer.value = eval(displayer.value);
                } catch {
                    displayer.value = 'Error';
                }
            }
        }

       
        function clearer() {
            displayer.value = '';
        }

     
        function deleter() {
            displayer.value = displayer.value.slice(0, -1);
        }

      
        function any() {
            try {
                displayer.value = eval(displayer.value);
            } catch {
                displayer.value = 'Error';
            }
        }

       
        displayer.addEventListener('input', () => {
            displayer.value = displayer.value.replace(/[^0-9+\-*/()%]/g, '');
        });

        
        displayer.addEventListener("keydown", calculation);