const connection = require('../config/connection');

//get all cats

const getCats = () => {
    return new Promise((reslove, reject) => {
        connection.query('SELECT * FROM cats', (err, catdata) => {
            if (err) {
                consol.log(err);
                //this goes to promise's .catch()
                return reject(err);
            }
            //this goes to promise's .then()
            reslove(catdata);
        });
    });
};



//create a cat
/*accepts object paramater => {cat_name: "Mr. Mustaphlease"} */
const createCat = (catObj) => {
    return new Promise((resolve, reject) => {

        connection.query('INSERT INTO cats SET ?', catObj, (err, catdata) => {
            if (err) {
                consol.log(err);
                //this goes to promise's .catch()
                return reject(err);
            }
            //this goes to promise's .then()
            resolve(catdata);
        });
    });
};


//update cats adoption status 
//catObj => {adopted: true} OR {adopted: false}
const updateCat = (catObj, catId) => {
    return new Promise((resolve, reject) => {

        connection.query('UPDATE cats SET ? WHERE id = ?', [catObj, catId], (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (catdata.affectedRows === 0) {
                return resolve({ message: "Sorry could'nt find that cat", code: 404 });
            }
            resolve({ message: "Cat updated successfully", code: 200 });
        });
    });
};

//delete a cat 
const deleteCat = catId => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM cats WHERE id = ?', [catId], (err, catdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else if (catdata.affectedRows === 0) {
                return resolve({ message: "Sorry could'nt find that cat", code: 404});
            }
            resolve({ message: "Cat deleted successfully", code: 200 });
        });
    });
};

module.exports = { getCats, createCat, updateCat, deleteCat};
