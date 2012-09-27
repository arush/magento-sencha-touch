<?php

class Senchahack_Sencha_Helper_Data extends Mage_Core_Helper_Abstract
{
    public function errorHandler($code = 'default', $message = 'no_message_available') {
        $errorMessage = array(
            'error' => array(
                'code' => $code,
                'message' => $message,
            ),            
        );
        
        return $this->returnAsJSON($errorMessage); 
    }
    
    
    public function returnAsJSON($data) {
        return json_encode($data);
    }
    
}
?>
