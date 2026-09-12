import { Room } from '../types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'grand-stone-suite',
    wingId: 'stone',
    name: {
      en: 'The Grand Stone Suite',
      vi: 'Stone Suite Cao Cấp',
    },
    subtitle: {
      en: 'Exposed Masonry, Vaulted Timber & Hydrotherapy Bath',
      vi: 'Đá Tự Nhiên, Dầm Gỗ Mộc & Bồn Tắm Thủy Lực',
    },
    tagline: {
      en: 'Rustic elegance framed by mountain panoramas and natural stone craft.',
      vi: 'Vẻ đẹp mộc mạc sang trọng giữa thiên nhiên và nghệ thuật đá mộc.',
    },
    description: {
      en: 'Carved with raw stone masonry walls and timber ceiling beams, this sanctuary features a private in-room hydrotherapy Jacuzzi tub overlooking scenic natural slopes. Complete with plush lounge chairs and pristine marble flooring.',
      vi: 'Không gian được chế tác từ tường đá tự nhiên và dầm gỗ trần, trang bị bồn tắm Jacuzzi thủy lực riêng hướng tầm nhìn ra dãy núi kỳ vĩ. Phòng sở hữu khu vực ghế thư giãn cao cấp và sàn đá cẩm thạch bóng.',
    },
    atmosphere: {
      en: 'Warm alpine tranquility infused with natural textures, tactile stone, and therapeutic bathing.',
      vi: 'Bầu không khí yên bình, ấm áp với bề mặt đá mộc mạc và trải nghiệm thư giãn thủy lực.',
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
        'Bồn Tắm Thủy Lực Jacuzzi Trong Phòng',
        'Tường Đá Mộc Tự Nhiên',
        'Trần Dầm Gỗ Cao Tròn',
        'Cửa Sổ Toàn Cảnh Hướng Núi',
        'Bàn Trang Điểm & Bộ Ghế Armchair',
        'Phòng Tắm Marble Cao Cấp',
      ],
    },
    bedType: {
      en: 'Master King Bed',
      vi: 'Giường Đôi King Size',
    },
    capacityNotice: {
      en: 'Ideal for couples or small families [crib placement visible]',
      vi: 'Phù hợp cho cặp đôi hoặc gia đình nhỏ [có hỗ trợ nôi gỗ]',
    },
  },

  {
    id: 'garden-villa-suite',
    wingId: 'garden',
    name: {
      en: 'The Garden Villa Suite',
      vi: 'Garden Villa Suite',
    },
    subtitle: {
      en: 'Tropical Teak Wood, Woven Lanterns & Private Patio',
      vi: 'Gỗ Teak Ấm Áp, Đèn Mây Tre & Hiên Vườn Riêng',
    },
    tagline: {
      en: 'Seamless indoor-outdoor living surrounded by lush garden greenery.',
      vi: 'Trải nghiệm sống hòa quyện cùng thiên nhiên và sân vườn nhiệt đới.',
    },
    description: {
      en: 'Crafted with rich teak timber wall paneling and handcrafted woven bamboo lighting, this villa suite opens directly onto a private garden patio terrace. Features handcrafted ceiling fans, patterned tile accents, and serene natural light.',
      vi: 'Được thiết kế với tường gỗ teak tự nhiên và hệ thống đèn mây tre đan thủ công, căn Villa Suite mở trực tiếp ra hiên vườn nhiệt đới xanh mát. Trang bị quạt trần gỗ, điểm nhấn gạch bông và ánh sáng tự nhiên.',
    },
    atmosphere: {
      en: 'Boutique tropical retreat with gentle breezes, warm wood acoustics, and garden vistas.',
      vi: 'Không gian nghỉ dưỡng nhiệt đới ngập tràn làn gió mát, chất gỗ ấm áp và cảnh quan sân vườn.',
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
        'Lối Vào Riêng Ra Hiên Sân Vườn Nhiệt Đới',
        'Đèn Thả Mây Tre Đan Thủ Công',
        'Ốp Tường Gỗ Teak Tự Nhiên',
        'Quạt Trần Gỗ & Trần Mây Đan',
        'Sàn Gạch Bông Họa Tiết',
        'Kệ Hành Lý & Bàn Làm Việc Gỗ',
      ],
    },
    bedType: {
      en: 'King Size Teak Platform Bed',
      vi: 'Giường King Size Khung Gỗ Teak',
    },
  },

  {
    id: 'urban-loft-suite',
    wingId: 'urban',
    name: {
      en: 'The Urban Loft Suite',
      vi: 'Urban Loft Suite',
    },
    subtitle: {
      en: 'Walk-In Closet, Houndstooth Accents & Architectural Lighting',
      vi: 'Phòng Thay Đồ Integrated, Vải Houndstooth & Đèn Ray',
    },
    tagline: {
      en: 'Sophisticated contemporary sanctuary with tailored dressing room and city views.',
      vi: 'Không gian sống hiện đại tinh tế với phòng thay đồ riêng và tầm nhìn thành phố.',
    },
    description: {
      en: 'Designed for discerning travelers, the Urban Loft Suite features an integrated walk-in wardrobe system, custom vanity, houndstooth textiles, and teal lounge armchair set against floor-to-ceiling windows.',
      vi: 'Dành cho du khách yêu thích sự tinh tế, phòng Urban Loft Suite sở hữu hệ thống phòng thay đồ mở, bàn trang điểm, họa tiết houndstooth sang trọng và ghế thư giãn bên cửa sổ cao kịch trần.',
    },
    atmosphere: {
      en: 'Metropolitan quiet luxury with neutral palette, soft wool carpets, and ambient track lights.',
      vi: 'Vẻ đẹp quiet luxury thành thị với tông màu trung tính, thảm len êm ái và ánh sáng dịu nhẹ.',
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
        'Hệ Thống Phòng Thay Đồ & Tủ Gương Audio Integrated',
        'Ghế Armchair Xanh Ngọc & Đôn Houndstooth',
        'Cửa Sổ Kính Cao Kịch Trần',
        'Bàn Làm Việc & Hộc TV Âm Tường',
        'Hệ Thống Đèn Ray Chiếu Sáng Nghệ Thuật',
        'Phòng Tắm Marble Travertine Hai Chậu Rửa',
      ],
    },
    bedType: {
      en: 'Upholstered Beige King Bed',
      vi: 'Giường King Bọc Nệm Beige',
    },
  },

  {
    id: 'sanctuary-twin-room',
    wingId: 'garden',
    name: {
      en: 'The Sanctuary Twin Room',
      vi: 'Sanctuary Twin Room',
    },
    subtitle: {
      en: 'Versatile Twin Bedding, Natural Craft & Garden/Stone Aesthetics',
      vi: 'Hai Giường Đơn Linh Hoạt, Chất Liệu Tự Nhiên & View Thư Thái',
    },
    tagline: {
      en: 'Thoughtfully appointed twin space combining natural materials with modern comfort.',
      vi: 'Không gian hai giường đơn tinh tế kết hợp vật liệu tự nhiên và sự tiện nghi.',
    },
    description: {
      en: 'Offering twin bed flexibility, this sanctuary room features geometric textured walls or natural timber headboards, handcrafted textiles, and warm ambient illumination. Available in both Stone and Garden wing settings.',
      vi: 'Sở hữu không gian 2 giường đơn linh hoạt, phòng được bài trí với mảng tường hoạ tiết hoặc tựa đầu giường gỗ tự nhiên, thảm dệt thủ công và ánh sáng ấm áp. Có sẵn tại cả 2 phân khu Stone và Garden.',
    },
    atmosphere: {
      en: 'Serene, adaptable companion stay focused on rest, natural textures, and light.',
      vi: 'Không gian nghỉ ngơi thư thái, linh hoạt chú trọng vào sự thoải mái và chất liệu tự nhiên.',
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
        'Bố Trí 2 Giường Đơn Drap Trắng Cao Cấp',
        'Tựa Đầu Giường Gỗ Tự Nhiên / Điểm Nhấn Tường Đá',
        'Đèn Đọc Sách & Ổ Cắm Tiện Nghi Riêng',
        'Khăn Dệt Thủ Công',
        'Phòng Tắm Đứng Vách Kính Rain Shower',
      ],
    },
    bedType: {
      en: 'Two Single Beds',
      vi: 'Hai Giường Đơn',
    },
  },
];
