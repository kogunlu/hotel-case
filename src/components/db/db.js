import economy from "../pictures/economy.jpeg"
import lux from "../pictures/lux.jpeg"
import family from "../pictures/family.jpeg"
import deluxe from "../pictures/deluxe.jpeg"

const roomTypes = [
    {
        name: "economy",
        maxVisitor: 2,
        imageSrc: economy,
        header: "Standart İki Kişilik Oda",
        description: "25 metrekare ferah ve oturma grubu olan supeirior odalarımız şehir manzaralıdır. Ücretsiz kablosuz internet hizmetinin yanısıra lcd televizyonlarda neredeyse bütün kanalları izleyebilirsiniz. Ayrıca odalar da kişisel eşyalarınızı rahatlıkla koyabileceğiniz elektronik kasa, çay veya kahve yapabilmeniz için kettle ve buklet malzemelerimiz bulunmaktadır."    
    },
    {
        name: "family",
        maxVisitor: 4,
        imageSrc: family,
        header: "Standart Aile Odası",
        description: "25 metrekare ferah ve oturma grubu olan supeirior odalarımız şehir manzaralıdır. Ücretsiz kablosuz internet hizmetinin yanısıra lcd televizyonlarda neredeyse bütün kanalları izleyebilirsiniz. Ayrıca odalar da kişisel eşyalarınızı rahatlıkla koyabileceğiniz elektronik kasa, çay veya kahve yapabilmeniz için kettle ve buklet malzemelerimiz bulunmaktadır."
    },
    {
        name: "lux",
        maxVisitor: 4,
        imageSrc: lux,
        header: "Suit Oda",
        description: "25 metrekare ferah ve oturma grubu olan supeirior odalarımız şehir manzaralıdır. Ücretsiz kablosuz internet hizmetinin yanısıra lcd televizyonlarda neredeyse bütün kanalları izleyebilirsiniz. Ayrıca odalar da kişisel eşyalarınızı rahatlıkla koyabileceğiniz elektronik kasa, çay veya kahve yapabilmeniz için kettle ve buklet malzemelerimiz bulunmaktadır."
    },
    {
        name: "deluxe",
        maxVisitor: 6,
        imageSrc: deluxe,
        header: "Saunalı Suit Oda",
        description: "25 metrekare ferah ve oturma grubu olan supeirior odalarımız şehir manzaralıdır. Ücretsiz kablosuz internet hizmetinin yanısıra lcd televizyonlarda neredeyse bütün kanalları izleyebilirsiniz. Ayrıca odalar da kişisel eşyalarınızı rahatlıkla koyabileceğiniz elektronik kasa, çay veya kahve yapabilmeniz için kettle ve buklet malzemelerimiz bulunmaktadır."
    }
]

export default roomTypes