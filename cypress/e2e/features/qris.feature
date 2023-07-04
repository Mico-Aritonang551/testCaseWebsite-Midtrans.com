Feature: Make a payment with QRIS

    As a valid user
    i want to make a payment with QRIS

    Scenario: Payment successful
        Given user berada di halaman pembayaran produk
        And user memilih pembayaran dengan QRIS
        When user menekan ikon QRIS
        Then user mendapatkan QR code QRIS