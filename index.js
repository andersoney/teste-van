const leanShippingCalculator = require('@vtex/lean-shipping-calculator').default;
// import data from "./data.json"

global.window = { vtexjs: undefined };

(async function () {
    // let data = await fetch("./data.json");
    const options = leanShippingCalculator.getLeanShippingOptions({
        "items": [
            {
                "id": "2",
                "requestIndex": 0,
                "quantity": 1,
                "seller": "1",
                "sellerChain": [
                    "1",
                    "gruposomarj"
                ],
                "tax": 0,
                "priceValidUntil": "2024-01-26T15:23:57Z",
                "price": 150,
                "listPrice": 150,
                "rewardValue": 0,
                "sellingPrice": 150,
                "offerings": [],
                "priceTags": [],
                "measurementUnit": "un",
                "unitMultiplier": 1.0000,
                "parentItemIndex": null,
                "parentAssemblyBinding": null,
                "availability": "available",
                "catalogProvider": "vrn:vtex.catalog-api-proxy:-:gruposoma:master:/proxy/authenticated/catalog/pvt/sku/stockkeepingunitbyid/2",
                "priceDefinition": {
                    "calculatedSellingPrice": 150,
                    "total": 150,
                    "sellingPrices": [
                        {
                            "value": 150,
                            "quantity": 1
                        }
                    ]
                }
            },
            {
                "id": "3",
                "requestIndex": 1,
                "quantity": 1,
                "seller": "1",
                "sellerChain": [
                    "1"
                ],
                "tax": 0,
                "priceValidUntil": "2024-01-26T15:23:57Z",
                "price": 150,
                "listPrice": 150,
                "rewardValue": 0,
                "sellingPrice": 150,
                "offerings": [],
                "priceTags": [],
                "measurementUnit": "un",
                "unitMultiplier": 1.0000,
                "parentItemIndex": null,
                "parentAssemblyBinding": null,
                "availability": "available",
                "catalogProvider": "vrn:vtex.catalog-api-proxy:-:gruposoma:master:/proxy/authenticated/catalog/pvt/sku/stockkeepingunitbyid/3",
                "priceDefinition": {
                    "calculatedSellingPrice": 150,
                    "total": 150,
                    "sellingPrices": [
                        {
                            "value": 150,
                            "quantity": 1
                        }
                    ]
                }
            }
        ],
        "ratesAndBenefitsData": {
            "rateAndBenefitsIdentifiers": [],
            "teaser": []
        },
        "paymentData": {
            "installmentOptions": [
                {
                    "paymentSystem": "2",
                    "bin": null,
                    "paymentName": "Visa",
                    "paymentGroupName": "creditCardPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "4",
                    "bin": null,
                    "paymentName": "Mastercard",
                    "paymentGroupName": "creditCardPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "6",
                    "bin": null,
                    "paymentName": "Boleto Bancário",
                    "paymentGroupName": "bankInvoicePaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "16",
                    "bin": null,
                    "paymentName": "Vale",
                    "paymentGroupName": "giftCardPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "44",
                    "bin": null,
                    "paymentName": "Venda Direta Debito",
                    "paymentGroupName": "debitDirectSalePaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "45",
                    "bin": null,
                    "paymentName": "Venda Direta Credito",
                    "paymentGroupName": "creditDirectSalePaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        },
                        {
                            "count": 2,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 150,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 2,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 150,
                                    "total": 300
                                }
                            ]
                        },
                        {
                            "count": 3,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 100,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 3,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 100,
                                    "total": 300
                                }
                            ]
                        },
                        {
                            "count": 4,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 75,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 4,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 75,
                                    "total": 300
                                }
                            ]
                        },
                        {
                            "count": 5,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 60,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 5,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 60,
                                    "total": 300
                                }
                            ]
                        },
                        {
                            "count": 6,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 50,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 6,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 50,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "47",
                    "bin": null,
                    "paymentName": "Cash",
                    "paymentGroupName": "cashPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "198",
                    "bin": null,
                    "paymentName": "Pagaleve Transparente",
                    "paymentGroupName": "Pagaleve TransparentePaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "201",
                    "bin": null,
                    "paymentName": "Customização Soma Store",
                    "paymentGroupName": "custom201PaymentGroupPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                },
                {
                    "paymentSystem": "203",
                    "bin": null,
                    "paymentName": "Soma Store - PIX",
                    "paymentGroupName": "custom203PaymentGroupPaymentGroup",
                    "value": 300,
                    "installments": [
                        {
                            "count": 1,
                            "hasInterestRate": false,
                            "interestRate": 0,
                            "value": 300,
                            "total": 300,
                            "sellerMerchantInstallments": [
                                {
                                    "id": "GRUPOSOMA",
                                    "count": 1,
                                    "hasInterestRate": false,
                                    "interestRate": 0,
                                    "value": 300,
                                    "total": 300
                                }
                            ]
                        }
                    ]
                }
            ],
            "paymentSystems": [
                {
                    "id": 6,
                    "name": "Boleto Bancário",
                    "groupName": "bankInvoicePaymentGroup",
                    "validator": null,
                    "stringId": "6",
                    "template": "bankInvoicePaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 44,
                    "name": "Venda Direta Debito",
                    "groupName": "debitDirectSalePaymentGroup",
                    "validator": null,
                    "stringId": "44",
                    "template": "debitDirectSalePaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 45,
                    "name": "Venda Direta Credito",
                    "groupName": "creditDirectSalePaymentGroup",
                    "validator": null,
                    "stringId": "45",
                    "template": "creditDirectSalePaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 4,
                    "name": "Mastercard",
                    "groupName": "creditCardPaymentGroup",
                    "validator": null,
                    "stringId": "4",
                    "template": "creditCardPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 16,
                    "name": "Vale",
                    "groupName": "giftCardPaymentGroup",
                    "validator": null,
                    "stringId": "16",
                    "template": "giftCardPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 47,
                    "name": "Cash",
                    "groupName": "cashPaymentGroup",
                    "validator": null,
                    "stringId": "47",
                    "template": "cashPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:23:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 2,
                    "name": "Visa",
                    "groupName": "creditCardPaymentGroup",
                    "validator": null,
                    "stringId": "2",
                    "template": "creditCardPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 198,
                    "name": "Pagaleve Transparente",
                    "groupName": "Pagaleve TransparentePaymentGroup",
                    "validator": null,
                    "stringId": "198",
                    "template": "Pagaleve TransparentePaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": false,
                    "description": null,
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:22:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 201,
                    "name": "Customização Soma Store",
                    "groupName": "custom201PaymentGroupPaymentGroup",
                    "validator": null,
                    "stringId": "201",
                    "template": "custom201PaymentGroupPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": true,
                    "description": "Soma Store",
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:23:58.3689004Z",
                    "availablePayments": null
                },
                {
                    "id": 203,
                    "name": "Soma Store - PIX",
                    "groupName": "custom203PaymentGroupPaymentGroup",
                    "validator": null,
                    "stringId": "203",
                    "template": "custom203PaymentGroupPaymentGroup-template",
                    "requiresDocument": false,
                    "displayDocument": false,
                    "isCustom": true,
                    "description": "Tipo de Pagamento para processamento do Soma Store",
                    "requiresAuthentication": false,
                    "dueDate": "2023-02-02T15:23:58.3689004Z",
                    "availablePayments": null
                }
            ],
            "payments": [],
            "giftCards": [],
            "giftCardMessages": [],
            "availableAccounts": [],
            "availableTokens": [],
            "availableAssociations": {}
        },
        "selectableGifts": [],
        "marketingData": {
            "utmSource": null,
            "utmMedium": null,
            "utmCampaign": null,
            "utmipage": null,
            "utmiPart": null,
            "utmiCampaign": "codigodavendedora",
            "coupon": null,
            "marketingTags": [
                "mvpsoma"
            ]
        },
        "postalCode": "44380000",
        "country": "BRA",
        "logisticsInfo": [
            {
                "itemIndex": 0,
                "addressId": null,
                "selectedSla": null,
                "selectedDeliveryChannel": null,
                "quantity": 1,
                "shipsTo": [
                    "BRA"
                ],
                "slas": [
                    {
                        "id": "Expressa",
                        "deliveryChannel": "delivery",
                        "name": "Expressa",
                        "deliveryIds": [
                            {
                                "courierId": "Loggi",
                                "warehouseId": "1_2",
                                "dockId": "Loggi",
                                "courierName": "Loggi",
                                "quantity": 1,
                                "kitItemDetails": []
                            }
                        ],
                        "shippingEstimate": "0bd",
                        "shippingEstimateDate": null,
                        "lockTTL": null,
                        "availableDeliveryWindows": [],
                        "deliveryWindow": null,
                        "price": 0,
                        "listPrice": 0,
                        "tax": 0,
                        "pickupStoreInfo": {
                            "isPickupStore": false,
                            "friendlyName": null,
                            "address": null,
                            "additionalInfo": null,
                            "dockId": null
                        },
                        "pickupPointId": null,
                        "pickupDistance": null,
                        "polygonName": "",
                        "transitTime": "0bd"
                    }
                ],
                "deliveryChannels": [
                    {
                        "id": "delivery"
                    }
                ]
            },
            {
                "itemIndex": 1,
                "addressId": null,
                "selectedSla": null,
                "selectedDeliveryChannel": null,
                "quantity": 1,
                "shipsTo": [
                    "BRA"
                ],
                "slas": [
                    {
                        "id": "Expressa",
                        "deliveryChannel": "delivery",
                        "name": "Expressa",
                        "deliveryIds": [
                            {
                                "courierId": "Loggi",
                                "warehouseId": "1_1",
                                "dockId": "Loggi",
                                "courierName": "Loggi",
                                "quantity": 1,
                                "kitItemDetails": []
                            }
                        ],
                        "shippingEstimate": "1d",
                        "shippingEstimateDate": null,
                        "lockTTL": null,
                        "availableDeliveryWindows": [],
                        "deliveryWindow": null,
                        "price": 0,
                        "listPrice": 0,
                        "tax": 0,
                        "pickupStoreInfo": {
                            "isPickupStore": false,
                            "friendlyName": null,
                            "address": null,
                            "additionalInfo": null,
                            "dockId": null
                        },
                        "pickupPointId": null,
                        "pickupDistance": 0.0,
                        "polygonName": "",
                        "transitTime": "0d"
                    }
                ],
                "deliveryChannels": [
                    {
                        "id": "delivery"
                    },
                    {
                        "id": "pickup-in-point"
                    }
                ]
            }
        ],
        "messages": [],
        "purchaseConditions": {
            "itemPurchaseConditions": [
                {
                    "id": "3",
                    "seller": "1",
                    "sellerChain": [
                        "1"
                    ],
                    "slas": [
                        {
                            "id": "Expressa",
                            "deliveryChannel": "delivery",
                            "name": "Expressa",
                            "deliveryIds": [
                                {
                                    "courierId": "Loggi",
                                    "warehouseId": "1_1",
                                    "dockId": "Loggi",
                                    "courierName": "Loggi",
                                    "quantity": 1,
                                    "kitItemDetails": []
                                }
                            ],
                            "shippingEstimate": "1d",
                            "shippingEstimateDate": null,
                            "lockTTL": null,
                            "availableDeliveryWindows": [],
                            "deliveryWindow": null,
                            "price": 0,
                            "listPrice": 0,
                            "tax": 0,
                            "pickupStoreInfo": {
                                "isPickupStore": false,
                                "friendlyName": null,
                                "address": null,
                                "additionalInfo": null,
                                "dockId": null
                            },
                            "pickupPointId": null,
                            "pickupDistance": 0.0,
                            "polygonName": "",
                            "transitTime": "0d"
                        }
                    ],
                    "price": 150,
                    "listPrice": 150
                },
                {
                    "id": "2",
                    "seller": "1",
                    "sellerChain": [
                        "1",
                        "gruposomarj"
                    ],
                    "slas": [
                        {
                            "id": "Expressa",
                            "deliveryChannel": "delivery",
                            "name": "Expressa",
                            "deliveryIds": [
                                {
                                    "courierId": "Loggi",
                                    "warehouseId": "1_2",
                                    "dockId": "Loggi",
                                    "courierName": "Loggi",
                                    "quantity": 1,
                                    "kitItemDetails": []
                                }
                            ],
                            "shippingEstimate": "0bd",
                            "shippingEstimateDate": null,
                            "lockTTL": null,
                            "availableDeliveryWindows": [],
                            "deliveryWindow": null,
                            "price": 0,
                            "listPrice": 0,
                            "tax": 0,
                            "pickupStoreInfo": {
                                "isPickupStore": false,
                                "friendlyName": null,
                                "address": null,
                                "additionalInfo": null,
                                "dockId": null
                            },
                            "pickupPointId": null,
                            "pickupDistance": null,
                            "polygonName": "",
                            "transitTime": "0bd"
                        }
                    ],
                    "price": 150,
                    "listPrice": 150
                }
            ]
        },
        "pickupPoints": [],
        "subscriptionData": null,
        "totals": [
            {
                "id": "Items",
                "name": "Total dos Itens",
                "value": 300
            }
        ],
        "itemMetadata": {
            "items": [
                {
                    "id": "2",
                    "seller": "1",
                    "assemblyOptions": [],
                    "catalogProvider": "vrn:vtex.catalog-api-proxy:-:gruposoma:master:/proxy/authenticated/catalog/pvt/sku/stockkeepingunitbyid/2"
                },
                {
                    "id": "3",
                    "seller": "1",
                    "assemblyOptions": [
                        {
                            "id": "vtex.subscription.assinatura",
                            "name": "vtex.subscription.assinatura",
                            "required": false,
                            "inputValues": {
                                "vtex.subscription.key.frequency": {
                                    "maximumNumberOfCharacters": 7,
                                    "domain": [
                                        "monthly"
                                    ]
                                }
                            },
                            "composition": null
                        }
                    ],
                    "catalogProvider": "vrn:vtex.catalog-api-proxy:-:gruposoma:master:/proxy/authenticated/catalog/pvt/sku/stockkeepingunitbyid/3"
                }
            ]
        }
    });

    console.log(options)
}())