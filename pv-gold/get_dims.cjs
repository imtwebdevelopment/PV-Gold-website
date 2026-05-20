const fs = require('fs');

function getJpegSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  let i = 0;
  if (buffer[i] !== 0xFF || buffer[i + 1] !== 0xD8) {
    throw new Error('Not a valid JPEG');
  }
  i += 2;
  while (i < buffer.length) {
    while (buffer[i] !== 0xFF) {
      i++;
    }
    while (buffer[i] === 0xFF) {
      i++;
    }
    const marker = buffer[i];
    i++;
    if (marker === 0xD9 || marker === 0xDA) {
      break; // End of image / Start of scan
    }
    const size = buffer.readUInt16BE(i);
    if (marker >= 0xC0 && marker <= 0xC3) {
      // SOF0 - SOF3 contain height and width
      const height = buffer.readUInt16BE(i + 3);
      const width = buffer.readUInt16BE(i + 5);
      return { width, height };
    }
    i += size;
  }
  throw new Error('Size not found');
}

try {
  const dims = getJpegSize('src/assets/Website Banner-01-01.jpg.jpeg');
  console.log('DIMENSIONS:', dims.width, 'x', dims.height, 'ASPECT RATIO:', dims.width / dims.height);
} catch (e) {
  console.error(e.message);
}
