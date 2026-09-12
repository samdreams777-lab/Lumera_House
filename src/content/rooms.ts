import { Room } from '../types';
import { getAssetUrl } from '../utils/assets';

const RAW_ROOMS_DATA: Room[] = [
  {
    id: 'grand-stone-suite',
    wingId: 'stone',
    name: {
      en: 'The Grand Stone Suite',
      vi: 'The Grand Stone Suite',
    },
    subtitle: {
      en: 'Exposed Masonry, Vaulted Timber & Hydrotherapy Bath',
      vi: 'Đá tự nhiên, trần gỗ vòm & bồn tắm thủy liệu pháp riêng',
    },
    tagline: {
      en: 'Rustic elegance framed by mountain panoramas and natural stone craft.',
      vi: 'Nét thanh lịch mộc mạc giữa những dãy núi khoáng đạt và nghệ thuật kiến tạo từ đá tự nhiên.',
    },
    description: {
      en: 'Carved with raw stone masonry walls and timber ceiling beams, this sanctuary features a private in-room hydrotherapy Jacuzzi tub overlooking scenic natural slopes. Complete with plush lounge chairs and pristine marble flooring.',
      vi: 'Được bao bọc bởi những bức tường đá tự nhiên và hệ xà trần gỗ, không gian nghỉ dưỡng này sở hữu bồn Jacuzzi thủy liệu pháp riêng, hướng tầm nhìn ra những triền núi xanh mướt. Ghế lounge êm ái cùng sàn đá cẩm thạch hoàn thiện vẻ tinh tế cho căn phòng.',
    },
    atmosphere: {
      en: 'Warm alpine tranquility infused with natural textures, tactile stone, and therapeutic bathing.',
      vi: 'Sự tĩnh tại ấm áp của miền sơn cước, hòa quyện cùng chất liệu tự nhiên, đá mộc và trải nghiệm ngâm mình thư giãn.',
    },
    heroPhoto: '/photos/pexels-umudicreative-38183818.jpg',
    galleryPhotos: [
      '/photos/pexels-umudicreative-38183818.jpg',
      '/photos/pexels-umudicreative-38183824.jpg',
      '/photos/pexels-umudicreative-38183822.jpg',
      '/photos/pexels-umudicreative-38183823.jpg',
      '/photos/pexels-artbovich-6444967.jpg',
    ],
    features: {
      en: [
        'In-Room Sunken Hydrotherapy Bath',
        'Exposed Natural Stone Masonry Walls',
        'Vaulted Timber Beam Ceiling',
        'Panoramic Mountain Window View',
        'Custom Vanity Mirror & Lounge Chairs',
        'Marble En-Suite Bathroom',
      ],
      vi: [
        'Bồn tắm thủy liệu pháp âm sàn riêng trong phòng',
        'Tường xây đá tự nhiên để lộ nguyên bản',
        'Trần gỗ với hệ xà vòm',
        'Cửa sổ toàn cảnh hướng núi',
        'Gương bàn trang điểm thiết kế riêng & ghế lounge',
        'Phòng tắm riêng lát đá cẩm thạch',
      ],
    },
    bedType: {
      en: 'Master King Bed',
      vi: 'Giường King cao cấp',
    },
    capacityNotice: {
      en: 'Ideal for couples or small families [crib placement visible]',
      vi: 'Phù hợp cho các cặp đôi hoặc gia đình nhỏ [có thể bố trí cũi em bé]',
    },
  },

  {
    id: 'garden-villa-suite',
    wingId: 'garden',
    name: {
      en: 'The Garden Villa Suite',
      vi: 'The Garden Villa Suite',
    },
    subtitle: {
      en: 'Tropical Teak Wood, Woven Lanterns & Private Patio',
      vi: 'Gỗ teak tự nhiên, đèn mây đan & hiên vườn riêng',
    },
    tagline: {
      en: 'Seamless indoor-outdoor living surrounded by lush garden greenery.',
      vi: 'Không gian sống liền mạch trong nhà – ngoài trời, bao quanh bởi sắc xanh nhiệt đới.',
    },
    description: {
      en: 'Crafted with rich teak timber wall paneling and handcrafted woven bamboo lighting, this villa suite opens directly onto a private garden patio terrace. Features handcrafted ceiling fans, patterned tile accents, and serene natural light.',
      vi: 'Được hoàn thiện với hệ ốp tường gỗ teak giàu sắc thái và những mẫu đèn tre đan thủ công, suite mở trực tiếp ra khoảng sân vườn riêng. Quạt trần thủ công, điểm nhấn gạch hoa văn và nguồn sáng tự nhiên dịu nhẹ tạo nên bầu không khí thư thái.',
    },
    atmosphere: {
      en: 'Boutique tropical retreat with gentle breezes, warm wood acoustics, and garden vistas.',
      vi: 'Một chốn nghỉ dưỡng nhiệt đới tinh tế, nơi làn gió nhẹ, chất gỗ ấm và những khoảng xanh trong vườn hòa quyện.',
    },
    heroPhoto: '/photos/pexels-quang-nguyen-vinh-222549-14025024.jpg',
    galleryPhotos: [
      '/photos/pexels-quang-nguyen-vinh-222549-14025024.jpg',
      '/photos/pexels-quang-nguyen-vinh-222549-14025032.jpg',
      '/photos/pexels-quang-nguyen-vinh-222549-14025037.jpg',
      '/photos/pexels-quang-nguyen-vinh-222549-14025033.jpg',
      '/photos/pexels-artbovich-7534212.jpg',
    ],
    features: {
      en: [
        'Direct Access to Private Tropical Garden Patio',
        'Handcrafted Woven Bamboo Pendant Lamps',
        'Rich Teak Wood Wall Paneling',
        'Handworked Ceiling Fan & Woven Mat Accent Ceiling',
        'Patterned Tile Inlay Flooring',
        'Luggage Bench & Work Vanity Console',
      ],
      vi: [
        'Lối đi riêng trực tiếp ra sân vườn nhiệt đới',
        'Đèn thả tre đan thủ công',
        'Hệ ốp tường gỗ teak tự nhiên',
        'Quạt trần thủ công & trần đan điểm họa tiết',
        'Sàn lát gạch họa tiết thủ công',
        'Ghế để hành lý & bàn trang điểm / bàn làm việc',
      ],
    },
    bedType: {
      en: 'King Size Teak Platform Bed',
      vi: 'Giường King bệ gỗ teak',
    },
  },

  {
    id: 'urban-loft-suite',
    wingId: 'urban',
    name: {
      en: 'The Urban Loft Suite',
      vi: 'The Urban Loft Suite',
    },
    subtitle: {
      en: 'Walk-In Closet, Houndstooth Accents & Architectural Lighting',
      vi: 'Phòng thay đồ riêng, họa tiết houndstooth & ánh sáng kiến trúc',
    },
    tagline: {
      en: 'Sophisticated contemporary sanctuary with tailored dressing room and city views.',
      vi: 'Không gian nghỉ dưỡng đương đại tinh tế với phòng thay đồ riêng và tầm nhìn rộng mở ra thành phố.',
    },
    description: {
      en: 'Designed for discerning travelers, the Urban Loft Suite features an integrated walk-in wardrobe system, custom vanity, houndstooth textiles, and teal lounge armchair set against floor-to-ceiling windows.',
      vi: 'Được thiết kế dành cho những vị khách tinh tế, Urban Loft Suite sở hữu hệ tủ quần áo walk-in tích hợp, bàn trang điểm thiết kế riêng, chất liệu dệt họa tiết houndstooth và bộ ghế lounge xanh teal nổi bật trước những ô cửa kính cao từ sàn đến trần.',
    },
    atmosphere: {
      en: 'Metropolitan quiet luxury with neutral palette, soft wool carpets, and ambient track lights.',
      vi: 'Sự sang trọng đương đại mang tinh thần đô thị, với bảng màu trung tính, thảm len mềm mại và hệ đèn ray tạo nên bầu không khí dịu nhẹ.',
    },
    heroPhoto: '/photos/pexels-artbovich-7535007.jpg',
    galleryPhotos: [
      '/photos/pexels-artbovich-7535007.jpg',
      '/photos/pexels-artbovich-7535008.jpg',
      '/photos/pexels-artbovich-7535013.jpg',
      '/photos/pexels-khojiakbar-teshaboev-2154965416-34559240.jpg',
      '/photos/pexels-khojiakbar-teshaboev-2154965416-34618647.jpg',
      '/photos/pexels-khojiakbar-teshaboev-2154965416-34631242.jpg',
      '/photos/pexels-artbovich-6587905.jpg',
    ],
    features: {
      en: [
        'Integrated Walk-In Closet & Dressing System',
        'Teal Lounge Chair & Houndstooth Ottoman',
        'Floor-to-Ceiling Window Views',
        'Custom Work Desk & Media Niche',
        'Architectural Track & Mood Lighting',
        'Travertine Double-Vanity Bathroom',
      ],
      vi: [
        'Phòng thay đồ walk-in & hệ tủ dressing tích hợp',
        'Ghế lounge xanh teal & đôn họa tiết houndstooth',
        'Cửa sổ kính cao từ sàn đến trần',
        'Bàn làm việc thiết kế riêng & khu media tích hợp',
        'Hệ đèn ray kiến trúc & đèn tạo không khí',
        'Phòng tắm hai lavabo lát đá travertine',
      ],
    },
    bedType: {
      en: 'Upholstered Beige King Bed',
      vi: 'Giường King bọc nệm màu be',
    },
  },

  {
    id: 'sanctuary-twin-room',
    wingId: 'garden',
    name: {
      en: 'The Sanctuary Twin Room',
      vi: 'The Sanctuary Twin Room',
    },
    subtitle: {
      en: 'Versatile Twin Bedding, Natural Craft & Garden/Stone Aesthetics',
      vi: 'Giường đôi linh hoạt, chất liệu thủ công tự nhiên & sắc thái vườn/đá',
    },
    tagline: {
      en: 'Thoughtfully appointed twin space combining natural materials with modern comfort.',
      vi: 'Không gian nghỉ ngơi được chăm chút với chất liệu tự nhiên và tiện nghi đương đại.',
    },
    description: {
      en: 'Offering twin bed flexibility, this sanctuary room features geometric textured walls or natural timber headboards, handcrafted textiles, and warm ambient illumination. Available in both Stone and Garden wing settings.',
      vi: 'Với bố trí hai giường linh hoạt, căn phòng mang đến lựa chọn đầu giường họa tiết hình học hoặc gỗ tự nhiên, kết hợp cùng chất liệu dệt thủ công và ánh sáng ấm dịu. Phòng có thể được bố trí tại khu Stone hoặc Garden.',
    },
    atmosphere: {
      en: 'Serene, adaptable companion stay focused on rest, natural textures, and light.',
      vi: 'Một không gian yên tĩnh và linh hoạt, đề cao sự nghỉ ngơi, chất liệu tự nhiên và ánh sáng.',
    },
    heroPhoto: '/photos/pexels-quang-nguyen-vinh-222549-14025022.jpg',
    galleryPhotos: [
      '/photos/pexels-quang-nguyen-vinh-222549-14025022.jpg',
      '/photos/pexels-quang-nguyen-vinh-222549-14025023.jpg',
      '/photos/pexels-umudicreative-38183817.jpg',
      '/photos/pexels-artbovich-7746071.jpg',
      '/photos/pexels-artbovich-7534212.jpg',
    ],
    features: {
      en: [
        'Twin Bed Layout with Premium Linens',
        'Custom Timber / Stone Headboard Accent',
        'Individual Bedside Reading Lights & Power Hubs',
        'Handcrafted Textiles & Knitted Throws',
        'Rain Shower En-Suite Bathroom',
      ],
      vi: [
        'Bố trí hai giường đơn với bộ chăn ga cao cấp',
        'Chi tiết đầu giường gỗ / đá thiết kế riêng',
        'Đèn đọc sách cá nhân & cổng sạc cạnh giường',
        'Đồ dệt thủ công & chăn len dệt',
        'Phòng tắm riêng với vòi sen mưa',
      ],
    },
    bedType: {
      en: 'Two Single Beds',
      vi: 'Hai giường đơn',
    },
  },
];

export const ROOMS_DATA: Room[] = RAW_ROOMS_DATA.map((room) => ({
  ...room,
  heroPhoto: getAssetUrl(room.heroPhoto),
  galleryPhotos: room.galleryPhotos.map((photo) => getAssetUrl(photo)),
}));
