Feature: Make a payment with Gopay

    As a valid user
    i want to make a payment with Gopay

    Scenario: Payment successful
        Given User berada di halaman pembayaran.
        When user memilih pembayaran dengan gopay
        Then user menekan ikon gopay
        Then user mendapatkan QR code

