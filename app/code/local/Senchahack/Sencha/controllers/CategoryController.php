<?php

class Senchahack_Sencha_CategoryController extends Mage_Core_Controller_Front_Action {

    public function indexAction() {
        die();
    }

    public function getAction() {
        $categoryId = $this->getRequest()->getParam('id');
        if(!is_null($categoryId)) {
            $this->getResponse()->setBody(Mage::helper('senchahack_sencha')->returnAsJSON($categoryId));
        } else {
            $this->getResponse()->setBody(Mage::helper('senchahack_sencha')->errorHandler('category_id_missing', 'CategoryId missing in request'));
    
        }
    }
    


}

