const path = require("path");
// const projects = require('./src/assets/data/projects.json');

// const { generateImageData } = require("gatsby-plugin-image")

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

}



// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//     const { createNode } = actions
//     projects.forEach((project) => {

//         const createImgNode = (img) => {
//             const IMG_PATH = "./src/assets/images/"
//             const { name, ext } = path.parse(img);
//             const absolutePath = path.resolve(__dirname, IMG_PATH, img);
    
//             const data = {
//                 name,
//                 ext,
//                 absolutePath, 
//                 extension: ext.substring(1),
//               };
            
//               const imageNode = {
//                 ...data,
//                 id: createNodeId(`card-image-${name}`),
//                 internal: {
//                   type: 'PortfolioCardImage',
//                   contentDigest: createContentDigest(data),
//                 },
//               };
//             return imageNode;
//         }


//         const {
//             id,
//             title,
//             subtitle,
//             onhome,
//             cardimg: {
//                 img,
//                 alt
//             },
//             tooltags,
//             otherimg,
//             description,
//             nextsetps
//         } = project;

//         const cardNode = createNode(createImgNode(img));
//         otherimg.map((oimg) => {
//             oimg.img = createNode(createImgNode(oimg.img))
//         });

//         const node = {
//             id: createNodeId(id),
//             title,
//             subtitle,
//             onhome,
//             cardimg: {
//                 cardNode,
//                 alt
//             },
//             tooltags,
//             otherimg,
//             description,
//             nextsetps,
//             internal: {
//                 type: 'Project',
//                 contentDigest: createContentDigest(project),
//             }
//         };

//         createNode(node)
//     });

// }