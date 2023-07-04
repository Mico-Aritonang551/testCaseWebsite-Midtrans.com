Feature: Make a payment with Shopeepay

    As a valid user
    i want to make a payment with Shopeepay

    Scenario: Payment successful
        Given user sudah berada di halaman pembayaran
        And user memilih pembayaran dengan shoopepay
        When user menekan ikon Shopeepay
        Then user mendapatkan QR code shoopepay