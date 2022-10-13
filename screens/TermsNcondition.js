import * as React from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

const DATA = [
    {
        id: "001",
        heading: "Terms and conditions",
        text: 'These terms and conditions ("Agreement") set forth the general terms and conditions of your use of the dealstryker.com website ("Website" or "Service") and any of its related products and services (collectively, "Services"). This Agreement is legally binding between you ("User", "you" or "your") and DealStryker, Inc. ("DealStryker, Inc.", "we", "us" or "our"). By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to thisAgreement, in which case the terms "User", "you" or "your" shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services. You acknowledge that this Agreement is a contract between you and DealStryker, Inc., even though it is electronicand is not physically signed by you, and it governs your use of the Website and Services.',
    },
    {
        id: "002",
        heading: "Accounts and membership",
        text: "You must be at least 18 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age. If you create an accounton the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under theaccount and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind mayresult in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages ofany kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.",
    },
    {
        id: "003",
        heading: "Billing and payments",
        text: "You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is dueand payable. Where Services are offered on a free trial basis, payment may berequired after the free trial period ends, and not when you enter your billing details (which may be required prior to the commencement of the free trial period). If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase. We reserve the right to change products and product pricing at any time. We also reserve theright to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/orshipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.",
    },
    {
        id: "004",
        heading: "Accuracy of information",
        text: "Occasionally there may be information on the Website that contains typographical errors, inaccuracies or omissions that may relate to promotionsand offers. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information on the Website or Services is inaccurate at any time without prior notice (including after you have submitted your order). We undertake noobligation to update, amend or clarify information on the Website including, without limitation, pricing information, except as required by law. No specified update or refresh date applied on the Website should be taken to indicate that all information on the Website or Services has been modified orupdated. ",
    },
    {
        id: "005",
        heading: "Third party services",
        text: "If you decide to enable, access or use third party services, be advised that your access and use of such other services are governed solely by the terms and conditions of such other services, and we do not endorse, are not responsible or liable for, and make no representations as to any aspect of such other services, including, without limitation, their content or the manner in which they handle data (including your data) or any interaction between you and the provider of such other services. You irrevocably waive any claim against DealStryker, Inc. with respect to such other services. DealStryker, Inc. is not liable for any damage or loss caused or alleged to be caused by or in connection with your enablement, access or use of any suchother services, or your reliance on the privacy practices, data security processes or other policies of such other services. You may be required to register for or log into such other services on their respective platforms. By enabling any other services, you are expressly permitting DealStryker, Inc. to disclose your data as necessary to facilitate the use or enablement of such other service.",
    },
    {
        id: "006",
        heading: "Links to other resources",
        text: "Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully reviewthe legal statements and other conditions of use of any resource which you access through a link on the Website and Services. Your linking to any other off-site resources is at your own risk.",
    },
    {
        id: "007",
        heading: "Intellectual property rights",
        text: '"Intellectual Property Rights" means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by DealStryker, Inc. or third parties, and all rights, titles, and interests in and to such property will remain (as betweenthe parties) solely with DealStryker, Inc. All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of DealStryker, Inc. or its licensors. Other trademarks, service marks, graphics and logos used in connection with the Website and Services may be the trademarks of other third parties. Your use of the Website and Services grants you no right or license to reproduce or otherwise use any of DealStryker, Inc. or third party trademarks.',
    },
    {
        id: "008",
        heading: "Disclaimer of warranty",
        text: 'You agree that such Service is provided on an "as is" and "as available" basis and that your use of the Website and Services is solely at your own risk. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement. We make no warranty that the Services will meet your requirements, or that the Service will be uninterrupted, timely, secure, or error-free; nor do we make any warranty as to the results that may be obtained from the use of the Service or as to the accuracy or reliability of any information obtained through the Service or that defects in the Service will be corrected. You understand and agree that any material and/or data downloaded or otherwise obtained through the use of Service is done at your own discretion and risk and that you will be solely responsible for any damage or loss of data that results from the download of such material and/or data. We make no warranty regarding any goods or services purchased or obtained through the Service or any transactions entered into through the Service unless stated otherwise. Noadvice or information, whether oral or written, obtained by you from us or through the Service shall create any warranty not expressly made herein.',
    },
    {
        id: "009",
        heading: "Limitation of liability",
        text: "To the fullest extent permitted by applicable law, in no event will DealStryker, Inc., its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach ofstatutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of DealStryker, Inc. and its affiliates, officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to DealStryker, Inc. for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.",
    },
    {
        id: "010",
        heading: "Indemnification",
        text: 'You agree to indemnify and hold DealStryker, Inc. and its affiliates, directors, officers, employees, agents, suppliers and licensors harmless fromand against any liabilities, losses, damages or costs, including reasonable attorneys" fees, incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website and Services or any willful misconduct on your part.',
    },
    {
        id: "011",
        heading: "Severability",
        text: "All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary sothat they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction,it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain infull force and effect.",
    },
    {
        id: "012",
        heading: "Dispute resolution",
        text: "The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Texas, United States without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of United States. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Texas, United States, and you hereby submit to the personal jurisdiction of such courts. You herebywaive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.",
    },
    {
        id: "013",
        heading: "Changes and amendments",
        text: "We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website and Services after any such changes shall constitute your consent to such changes.",
    },
    {
        id: "014",
        heading: "Acceptance of these terms",
        text: "You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.",
    },
    {
        id: "015",
        heading: "Contacting us",
        text: "If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to contact@dealstryker.comThis document was last updated on February 2, 2021",
    },
];

const win = Dimensions.get("window");
function TermsNcondition() {
    const renderItem = ({ item }) => (
        <View style={styles.listWrap}>
            <Text style={styles.textHeading}>{item.heading}</Text>
            <Text style={styles.textData}>{item.text}</Text>
        </View>
    );
    return (
        <View style={styles.main}>
            <View style={styles.headingWrap}>
                <MaterialIcons name="library-books" size={win.height / 25} color="#0F3749" />
                <Text style={styles.heading}>Terms & Conditions</Text>
            </View>
            <View style={styles.listWrapper}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { width: "100%", paddingBottom: win.height / 5 },
    headingWrap: {
        height: win.height / 10,
        // backgroundColor: "crimson",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: win.width / 30,
    },
    heading: {
        fontSize: win.height / 40,
        paddingLeft: win.width / 50,
        color: "#0F3749",
    },
    listWrapper: {
        marginBottom: win.height / 20,
    },
    listWrap: {
        backgroundColor: "white",
        marginHorizontal: win.width / 20,
        paddingHorizontal: win.width / 25,
        paddingTop: win.height / 30,
    },
    textHeading: {
        fontSize: win.height / 45,
        fontWeight: "bold",
        color: "#0F3749",
        paddingVertical: win.height / 40,
    },
    textData: {
        fontSize: win.height / 50,
        color: "#0F3749",
        paddingBottom: win.height / 40,
    },
});
export default TermsNcondition;
