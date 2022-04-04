import java.util.ArrayList;

import org.jnetpcap.Pcap;
import org.jnetpcap.PcapIf;
import org.jnetpcap.packet.JPacket;
import org.jnetpcap.packet.PcapPacket;
import org.jnetpcap.winpcap.WinPcap;

public class Port {

    byte[] IPAdress;
	byte[] MACAdress;
	
	public ArrayList<JPacket> sendPacket = new ArrayList<JPacket>();
	public ArrayList<PcapPacket> acceptPacket = new ArrayList<PcapPacket>();
		
	private Listener listen = new Listener();
	private HandlePacket send = new HandlePacket();
	
	public void openPortConnection(PcapIf device) {
	
		int snaplet = 64*1024;
        int flags = WinPcap.MODE_PROMISCUOUS | WinPcap.OPENFLAG_NOCAPTURE_LOCAL | WinPcap.OPENFLAG_NOCAPTURE_RPCAP; // capture all packets  
    	int timeout = 10;
    	StringBuilder errbuf2 = new StringBuilder();
    	
    	Pcap pcap = Pcap.openLive(device.getName(), snaplet, flags, timeout, errbuf2);
        if (pcap == null) {  
            System.out.println("Error while opening device for capture.");  
            return;  
        } 
 
        listen.setListener(pcap, this);
        send.setHandler(this);
        
        listen.ListenPacket();
        send.ReadPacket();
	}
}

