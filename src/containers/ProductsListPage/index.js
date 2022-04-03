import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import getParams from '../../utils/getParams'
import { ProductPage } from './ProductPage'
import { ProductsStore } from './ProductsStore'
/**
* @author
* @function ProductsListPage
**/

export const ProductsListPage = (props) => {
    const renderProduct = () => {
        const params = getParams(props.location.search);
        let content = null;

        switch (params.type) {
            case 'store':
                content = <ProductsStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default: content=null
        }
        return content;
    }
    return (
        <div>
            <Layout>

                {
                    renderProduct()
                }
            </Layout>
        </div>
    )

}