const tokens = [
  'รักษาสิ่งแวดล้อม',
  'สามัคคี',
  'รักชาติยิ่ง',
  'ประหยัด',
  'เรียนดี',
  'สู่อนาคต',
  'ใส่ใจเทคโนโลยี',
  'รักวัฒนธรรมไทย',
  'ยามเด็กจงหมั่นเรียนเพียรกระทำดี',
  'เป็นเด็กดี',
  'เป็นความดีที่เด็กพึงจำ',
  'เติบใหญ่จะได้มีความสุขความเจริญ',
  'ใฝ่เรียนรู้',
  'สร้างสรรค์เทคโนโลยี',
  'ใฝ่หาความรู้',
  'มีวินัย',
  'เรียนรู้',
  'รักษาวินัย',
  'จะต้องทำตัวให้ดีมีวินัยเสียแต่บัดนี้',
  'มุ่งหาความรู้',
  'ขยันใฝ่รู้',
  'ตั้งใจใฝ่ศึกษา',
  'จงเป็นเด็กที่รักความสะอาด',
  'สุจริตใจมั่น',
  'รักชาติ',
  'เรียนให้สนุก',
  'รู้หน้าที่',
  'เด็กดี',
  'ยึดมั่นประชาธิปไตย',
  'รอบคอบ',
  'เด็กไทยมีวินัย',
  'กษัตริย์',
  'อนาคตของชาติจะสุกใส',
  'ขยันศึกษา',
  'เด็กไทยคือหัวใจของชาติ',
  'จงเป็นเด็กที่รักความก้าวหน้า',
  'รักพ่อแม่',
  'มีความเฉลียวฉลาด',
  'อดทน',
  'ต้องขยันอ่าน',
  'ก้าวทันเทคโนโลยี',
  'หมั่นเพียร',
  'ถือคุณธรรม',
  'ร่วมใจพัฒนา',
  'ขยันคิด',
  'หลีกเลี่ยงอบายมุข',
  'ใฝ่คุณธรรม',
  'ทำให้มีอนาคตแจ่มใส',
  'ซื่อสัตย์',
  'รักเรียน',
  'ใฝ่ดีมีความคิด',
  'ความเจริญและความมั่นคงของชาติไทยในอนาคต',
  'สมานสามัคคี',
  'คงรักษาความเป็นไทย',
  'เด็กดีเป็นศรีแก่ชาติ',
  'ใฝ่ศึกษา',
  'รู้เท่าทัน',
  'คิดอย่างสร้างสรรค์',
  'เป็นคุณสมบัติของเยาวชนไทย',
  'จงเป็นเด็กที่อยู่ในระเบียบวินัย',
  'รู้เรียน',
  'นำชาติพัฒนา',
  'พาชาติมั่นคง',
  'เด็กฉลาดชาติเจริญ',
  'ขึ้นอยู่กับเด็กที่มีวินัย',
  'ใจสัตย์ซื่อ',
  'ฉลาดคิด',
  'สร้างไทย',
  'รู้สามัคคี',
  'อนาคตดีแน่นอน',
  'เชิดชูความเป็นไทย',
  'มีความประพฤติเรียบร้อย',
  'นิยมไทย',
  'นำพาไทยสู่อาเซียน',
  'ให้มั่นคง',
  'จรรยางาม',
  'หลีกไกลยาเสพติด',
  'จิตบริสุทธิ์',
  'ผูกพันรักสามัคคี',
  'เด็กไทย',
  'เด็กที่ต้องการเห็นอนาคตของชาติรุ่งเรือง',
  'สู่อนาคตที่สดใส',
  'รู้คุณค่าวัฒนธรรมไทย',
  'จุดประกายฝัน',
  'มีความรู้',
  'เพิ่มพูนปัญญา',
  'ใส่ใจศึกษา',
  'สืบสานวัฒนธรรมไทย',
  'ใช้ชีวิตพอเพียง',
  'เป็นคุณสมบัติของเด็กไทย',
  'หากเด็กไทยแข็งแรง',
  'สามัคคีคือพลัง',
  'เด็กรุ่นใหม่',
  'คิดสร้างสรรค์',
  'ขอให้เด็กสมัยปฏิวัติของข้าพเจ้า',
  'ขยันเรียน',
  'มีความสามารถ',
  'เด็กที่ดีต้องมีสัมมาคารวะ',
  'ขยัน',
  'เด็กจะเจริญต้องรักเรียนเพียรทำดี',
  'รักสิ่งดีๆ',
  'รู้คิด',
  'เด็กประพฤติดีและศึกษาดี',
  'เรียนรู้ตลอดชีวิต',
  'เชิดชูชาติศาสน์กษัตริย์',
  'นำประชาธิปไตย',
  'เล่นให้มีความรู้',
  'ความรู้',
  'เชิดชูคุณธรรม',
  'มีจิตสาธารณะ',
  'รู้ประหยัด',
  'จงเป็นเด็กที่มีความขยันหมั่นเพียรมากที่สุด',
  'เด็กดีคือทายาทของชาติไทย',
  'เคร่งครัดคุณธรรม',
  'มีคุณธรรมนำใจ',
  'หมั่นศึกษา',
  'เยาวชนฝึกตนดี',
  'ไม่พึ่งพายาเสพติด',
  'อยากฉลาด',
  'คู่คุณธรรม',
  'จงเป็นเด็กที่ประหยัด',
  'เด็กฉลาดชาติมั่นคง',
  'คู่ปัญญา',
  'ต้องร่วมใจร่วมพลังสร้างความสามัคคี',
  'มานะ',
  'นำสู่อนาคต',
  'จงบำเพ็ญตนให้เป็นประโยชน์ต่อผู้อื่นและส่วนรวม',
  'ศาสน์',
  'รู้เล่น',
  'ใช้ประหยัด',
  'มีวินัยและคุณธรรม',
  'บากบั่น',
  'กล้าพูด',
  'กล้าคิด',
  'กตัญญู',
];

export default tokens;
