new Vue({
    el: '#app',
    data: {
        billAmount: 0,
        tipPercentage: 15,
        tipAmount: 0,
        totalAmount: 0
    },
    methods: {
        calculateTip() {
            this.tipAmount = this.billAmount * (this.tipPercentage / 100);
            this.totalAmount = this.billAmount + this.tipAmount;
        }
    }
});