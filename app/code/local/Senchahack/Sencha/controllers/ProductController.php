<?php

class Senchahack_Sencha_ProductController extends Mage_Core_Controller_Front_Action
{
    /**
     * load product data to given id parameter
     *
     * @return string json data
     */
    public function getAction()
    {
        $productId  = (int)$this->getRequest()->getParam('id');
        $product    = Mage::getModel('catalog/product')->load($productId);

        if (!$product->getId()) {
            echo Mage::helper('senchahack_sencha')
                    ->errorHandler('product_not_found', 'requested product was not found');
            return;
        }

        $json = json_encode($product->getData());
        echo $json;
    }
}