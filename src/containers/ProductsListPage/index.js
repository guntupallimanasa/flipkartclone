import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import getParams from '../../utils/getParams'
import { ProductPage } from './ProductPage'
import {ProductStore} from './ProductsStore'
import { ClothingAndAccessories } from './ClothingAndAccessories'
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
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:content = <ClothingAndAccessories {...props} />;

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