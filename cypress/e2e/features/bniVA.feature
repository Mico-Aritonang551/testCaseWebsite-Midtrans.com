Feature: Make a payment with BNI VA

    As a valid user
    i want to make a payment with BNI VA

    Scenario: Payment successful
    Given User berada di halaman pembayaran
    When User menekan jenis pembayaran virtual account
    And User memilih pembayaran dengan BNI VA
    Then User mendapatkan BNI VA Number

