import { baseApi } from "../api/Api";

const PaymentApi = baseApi.injectEndpoints({
    endpoints: (build)=>({
        PaymentIntent: build.mutation({
            query: (data) =>({
                method: "POST",
                url: "/payment/payment-intent",
                body: data
            })
        }),
        paymentCreate:  build.mutation({
            query: (data) =>({
                method: "POST",
                url: "/payment/create-payment",
                body: data
            })
        }),
    })

})

export const {usePaymentIntentMutation, usePaymentCreateMutation} = PaymentApi 