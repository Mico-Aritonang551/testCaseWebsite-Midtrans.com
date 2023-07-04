Feature: Make a payment with Mandiri VA

    As a valid user
    i want to make a payment with Mandiri VA

    Scenario: Payment successful
    Given User berada di dalam halaman pembayaran
    When User memilih jenis pembayaran virtual account
    And User menekan pembayaran dengan Mandiri VA
    Then User mendapatkan Mandiri VA Number

