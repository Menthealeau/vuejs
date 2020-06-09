new Vue({

    el: "#additionner",
    data: {
        nb1: 0,
        nb2: 0,
    },

    methods: {
        resultat: function (nb1, nb2) {
            if (isNaN(nb1) || isNaN(nb2)) {
                return 'Ce ne sont pas des chiffres';
            } else {
                return parseInt(nb1) + parseInt(nb2);
            }

        }
    }
})

new Vue({

    el: "#nbmag",
    data: {

        nombre: 0,
        nbatrouver: Math.floor(Math.random() * 100),
        reponse: '',
        consigne: 'Nombre Magique, Devinez une valeur entre 0 et 100'
    },

    methods: {

        verif: function (nombre) {
            nombre = parseInt(nombre);
            nbatrouver = this.nbatrouver;
            console.log(nbatrouver);

            if (!isNaN(nombre)) {
                if (nombre > 0 && nombre < nbatrouver) {
                    this.reponse = 'Plus grand';
                } else {
                    if (nombre > 0 && nombre > nbatrouver) {
                        this.reponse = 'Plus petit';
                    }
                }
                if (nombre === nbatrouver) {
                    this.reponse = 'Bravo, le nombre magique etait ' + nbatrouver;
                }
            } else {
                this.reponse = 'Ce n\'est pas un nombre, veuillez saisir un nombre';
            }
        }
    }

})

new Vue({

    el: '#calcul',
    data: {

        res: 0,
    },
    methods: {

        nombre: function (nb) {


            return this.res += nb;

        },
        total: function () {

            let egal = this.res;
            return this.res = eval(egal);

        },

    }


})

new Vue({

    el: '#panneau',
    data: {

        panneau1: true,
        panneau2: false

    },
    methods: {
    inverse: function(number)
    {
        if (number == 1)
        {
            this.panneau2 = false;
            this.panneau1 = true;
        }
        else
        {
            this.panneau1 = false;
            this.panneau2 = true;
        }
    }
    }
})