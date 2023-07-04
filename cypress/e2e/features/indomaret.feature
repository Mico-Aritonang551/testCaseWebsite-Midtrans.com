Feature: Make a payment with Indomaret

    As a valid user
    i want to make a payment with Indomaret

    Scenario: Payment successful
        Given User sedang berada di halaman pembayaran
        When user memilih pembayaran dengan Indomaret
        Then user menekan ikon Indomaret
        Then user mendapatkan payment code Indomaret

