

function productCollection (){
    this._proto_=[];

    //filers products in stock 
    this.availableProducts = function(){
        return this.filter(function(product){
            return product.isAvailable();
        })
    }

}

productCollection.prototype = [];
productCollection.prototype.constructor = productCollection;

function collectionProduct (product){
    
    const STATUS = {INSTOCK: 'in', OUTSTOCK: 'out'};

  //all products are available until changed
    product.status = STATUS.INSTOCK;


    product.Instock= function(){
        this.status = STATUS.INSTOCK;
    }

    product.Outstock = function(){
        this.status = STATUS.OUTSTOCK;
    }

    product.isAvailable = function(){
        return this.status === STATUS.INSTOCK;
    }

    return product;
}