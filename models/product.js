const fs        =   require('fs');
const path      =   require('path');
const { uuid }  =   require('uuidv4');

class Product
{
    constructor(title, price, img)
    {
        this.title  = title;
        this.price  = price;
        this.img    = img;
        this.id     = uuid();
    }

    static getAll()
    {
        return new Promise( (resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                'utf-8',
                (err, content) => {
                    if(err)
                    {
                        reject(err);
                    }
                    else
                    {
                        resolve(JSON.parse(content));
                    }
                }
            )
        });
    }

    async save()
    {
        const products = await Product.getAll()
        products.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
              path.join(__dirname, '..', 'data', 'products.json'),
              JSON.stringify(products),
              (err) => {
                if (err) {
                  reject(err)
                } else {
                  resolve()
                }
              }
            )
          })
    }

    toJSON()
    {
        return {
            title:  this.title,
            price:  this.price,
            img:    this.img,
            id:     this.id
        }
    }
}

module.exports = Product