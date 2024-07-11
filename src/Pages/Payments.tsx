import Pay from "@/components/layout/payment/Pay"
import SectionLayout from "@/components/layout/SectionLayout"


const PaymentCard = () => {
  return (
    <div>
        <SectionLayout>
            <div className="bg-green-800 text-white flex gap-2 ">
            <Pay></Pay>
            <div>
                hello
            </div>

            </div>
        </SectionLayout>
    </div>
  )
}

export default PaymentCard