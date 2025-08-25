'use client'
import { Form } from "@/features/nuevo-sitio/components/Form"
import { GoogleMaps } from "@/features/nuevo-sitio/components/GoogleMaps"

const page = () => {
    return (
        <div className="padding-sides pt-5 pb-5">
            <h2>Nuevo sitio</h2>
            <div className="d-flex justify-content-between col-12">
                <Form />
                <GoogleMaps />
            </div>
        </div>
    )
}

export default page
