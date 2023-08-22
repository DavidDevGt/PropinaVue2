new Vue({
    el: '#app',
    data: {
        billAmount: '',
        tipPercentage: '',
        tipAmount: 0,
        totalAmount: 0,
        selectedCurrency: 'USD',
        currencySymbols: {
            'USD': '$',
            'GTQ': 'Q',
            'MXN': '$',
            'COP': '$'
        },
        error: ''
    },
    watch: {
        // Observar cambios en la selección de moneda para limpiar los campos
        selectedCurrency() {
            this.billAmount = '';
            this.tipPercentage = '';
            this.tipAmount = 0;
            this.totalAmount = 0;
            this.error = '';
        }
    },
    methods: {
        calculateTip() {
            // Validación básica
            if (!this.billAmount || isNaN(this.billAmount) || this.billAmount < 0) {
                this.error = "Por favor, ingrese un monto de factura válido.";
                return;
            }

            if (!this.tipPercentage || isNaN(this.tipPercentage) || this.tipPercentage < 0 || this.tipPercentage > 100) {
                this.error = "Por favor, ingrese un porcentaje de propina válido.";
                return;
            }

            this.error = '';  // Limpiar mensajes de error anteriores

            // Calculamos la propina basada en el monto ingresado
            this.tipAmount = parseFloat(this.billAmount) * (parseFloat(this.tipPercentage) / 100);

            // Calculamos el total sumando el monto y la propina
            this.totalAmount = parseFloat(this.billAmount) + this.tipAmount;
        }
    }
});
