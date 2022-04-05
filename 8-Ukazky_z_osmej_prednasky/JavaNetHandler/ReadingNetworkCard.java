import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jnetpcap.Pcap;
import org.jnetpcap.PcapIf;

public class ReadingNetworkCard {
    public static List<PcapIf> alldevs = new ArrayList<PcapIf>(); // Will be filled with NICs  

	public static void main(String[] args) throws IOException { 
		StringBuilder errbuf = new StringBuilder(); // For any error msgs  
        /*************************************************************************** 
         * First get a list of devices on this system 
         **************************************************************************/  
        System.out.println("Debug");

        Pcap.findAllDevs(alldevs, errbuf);  

        if (alldevs.isEmpty()) {  
            System.err.printf("Can't read list of devices, error is %s", errbuf.toString());  
            return;
        } 
        
        for(int i = 0; i < alldevs.size(); i++){
        	PcapIf device = alldevs.get(i);
            System.out.println("Name:" + device.getDescription());
        }

        Port port = new Port();
        port.openPortConnection(alldevs.get(8));
        System.out.println("BLE");
    }	
}
